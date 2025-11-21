import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "User creation failed" }, { status: 500 });
  }
}