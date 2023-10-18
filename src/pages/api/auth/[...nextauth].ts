import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import notifyNewUser from "@/lib/notifyNewUser";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await notifyNewUser(user);
      return true;
    },
    async session({ session, user }) {
      session.userId = user.id;
      return session;
    },
  },
  secret: "secret",
  theme: {
    colorScheme: "light",
    logo: "/icon-easylist.svg",
    brandColor: "#FEF9C3",
  },
});
