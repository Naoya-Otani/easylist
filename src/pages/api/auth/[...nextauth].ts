import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import notifyNewUser from "@/lib/notifyNewUser";
import notifyAuthError from "@/lib/notifyAuthError";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async session({ session, user }) {
      session.userId = user.id;
      return session;
    },
  },
  secret: "secret",
  events: {
    async createUser({ user }) {
      await notifyNewUser(user);
    },
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
      notifyAuthError(metadata, code);
    },
    warn(code) {
      console.warn(code);
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
