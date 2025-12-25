import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  
  providers: [
    CredentialsProvider({

      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          console.log("Looking up user:", credentials.email);

          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
            include: { section: true },
          });

          console.log("User found:", !!user);

          if (user && await bcrypt.compare(credentials.password as string, user.password)) {
            return {
              id: user.id.toString(),
              name: `${user.firstName} ${user.middleName} ${user.lastName} ${user.suffix ?? ''}`,
              firstName: user.firstName,
              middleName: user.middleName,
              lastName: user.lastName,
              suffix: user.suffix,
              email: user.email,
              section: user.section?.name, 
            };
          }

          return null;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  
  session: { 
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // user is only available on the first call (login)
        token.id = user.id;
        token.section = (user as any).section;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
        (session.user as any).section = token.section;
      }
      return session;
    },
  },

  pages: {
    signIn: "/view/auth/login", 
  },
});

