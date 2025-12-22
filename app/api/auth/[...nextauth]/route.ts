import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
  debug: true, // ✅ Enable debug mode
  
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _request: Request) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          console.log("🔍 Looking up user:", credentials.email); // Debug

          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
            include: { section: true },
          });

          console.log("👤 User found:", !!user); // Debug

          if (user && await bcrypt.compare(credentials.password as string, user.password)) {
            return {
              id: user.id.toString(),
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
              section: user.section?.name,
            };
          }

          return null;
        } catch (error) {
          console.error("❌ Authorize error:", error); // Catch DB errors
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
        (token as any).id = user.id;
        (token as any).section = (user as any).section;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token) {
        (session.user as any).id = (token as any).id;
        (session.user as any).section = (token as any).section;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };
