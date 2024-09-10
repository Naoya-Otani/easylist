import notifyAuthError from "@/lib/notifyAuthError";
import notifyNewUser from "@/lib/notifyNewUser";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const authSecret = process.env.AUTH_SECRET;

if (!googleClientId || !googleClientSecret) {
	throw new Error("Missing Google OAuth credentials");
}

if (!authSecret) {
	throw new Error("Missing AUTH_SECRET environment variable");
}

declare module "next-auth" {
	interface Session {
		userId: string;
	}
}

const authConfig: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: googleClientId,
			clientSecret: googleClientSecret,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			// Check if user is allowed to sign in
			return true;
		},
		async session({ session, user }) {
			if (session.user) {
				session.userId = user.id;
			}
			return session;
		},
	},
	secret: authSecret,
	events: {
		async createUser({ user }) {
			await notifyNewUser(user);
		},
	},
	logger: {
		error(error) {
			console.error(error.message);
			notifyAuthError(JSON.stringify(error), "");
		},
		warn(code) {
			console.warn(code);
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
