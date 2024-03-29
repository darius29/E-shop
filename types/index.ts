import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updateAt" | "emailVerified"
> & {
  id: string;
  createdAt: string;
  updateAt: string;
  emailVerified: string | null;
};
