"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type React from "react";

export const NextAuthProvider = ({
	children,
	session,
}: { children: React.ReactNode; session: Session | null }) => {
	return (
		<SessionProvider session={session} refetchOnWindowFocus={false}>
			{children}
		</SessionProvider>
	);
};
