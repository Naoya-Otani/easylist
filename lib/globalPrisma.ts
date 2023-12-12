import { PrismaClient, Prisma } from "@prisma/client";
import type * as PrismaType from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let prisma: PrismaClient;
if (typeof window === "undefined" || process.env.NODE_ENV === "development") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient();
    }
    prisma = globalForPrisma.prisma;
  }
}

export type { PrismaType };
export { Prisma, prisma };
