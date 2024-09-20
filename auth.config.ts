import notifyAuthError from "@/lib/notifyAuthError";
import notifyNewUser from "@/lib/notifyNewUser";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { track } from "@vercel/analytics/react";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const authSecret = process.env.AUTH_SECRET;

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
		async signIn() {
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
			track("user_created");
			await notifyNewUser(user);
		},
	},
	logger: {
		error(error) {
			console.error(error.message);
			notifyAuthError(JSON.stringify(error), "wip");
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
