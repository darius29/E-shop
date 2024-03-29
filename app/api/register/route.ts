import bycrpt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  const hasedPassword = await bycrpt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hasedPassword,
    },
  });

  return NextResponse.json(user);
}
