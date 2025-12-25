import { NextResponse } from "next/server";
import { auth } from "@/auth"; // Adjust path to where your NextAuth config is
import { UserModel } from "@/app/models/user"; 

export async function GET() {
  try {
    // 1. Get the session server-side
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Convert ID to number (DB uses Int, NextAuth uses String)
    // We use the ID stored in the session from your callbacks
    const userId = parseInt(session.user.id as string);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
    }

    // 3. Fetch full details using your existing Model
    const user = await UserModel.findById(userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 4. Return the data (excluding password for security)
    const { password, ...userWithoutPassword } = user;
    
    return NextResponse.json(userWithoutPassword);
    
  } catch (error) {
    console.error("Profile API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}