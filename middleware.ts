import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Skip public routes
  if (req.nextUrl.pathname.startsWith("/api/auth") || 
      req.nextUrl.pathname === "/auth" ||
      req.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  // Get token from cookies
  const token = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET 
  });

  // Redirect to login if no token
  if (!token) {
    const loginUrl = new URL("/auth", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/admin/:path*",
  ],
};
