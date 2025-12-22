import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      section?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    section?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    section?: string | null;
  }
}
