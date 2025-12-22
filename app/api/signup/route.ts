import { NextRequest, NextResponse } from "next/server";
// FIX 1: Use default import (no curly braces) because your lib uses 'export default'
import prisma from "@/app/lib/prisma"; 
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      firstName, 
      middleName, 
      lastName, 
      suffix, 
      block, // The user inputs "BSIT 3-A"
      email, 
      password 
    } = body;

    // 1. Validate required fields
    if (!firstName || !lastName || !email || !password || !block) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    // 2. Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" }, 
        { status: 409 }
      );
    }

    // 3. Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create User & Link Section
    const user = await prisma.user.create({
      data: {
        firstName,
        middleName: middleName || null,
        lastName,
        suffix: suffix || null,
        email,
        password: hashedPassword,
        status: "active",
        
        // FIX 2: Your DB has a 'name' column, so we map 'block' -> 'name'
        section: {
          connectOrCreate: {
            where: { name: block }, 
            create: { name: block }, 
          },
        },
      },
      include: {
        section: true
      }
    });

    return NextResponse.json(
      { 
        id: user.id, 
        email: user.email,
        block: user.section?.name 
      }, 
      { status: 201 }
    );

  } catch (err: any) {
    console.error("Create User Error:", err); // Check VS Code terminal if this logs
    return NextResponse.json(
      { error: "User creation failed" }, 
      { status: 500 }
    );
  }
}