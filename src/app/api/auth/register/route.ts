import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, password } = body

    if (!email || !name || !password) {
      return new NextResponse("Thiếu thông tin", { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return new NextResponse("Email đã được sử dụng", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.log("[REGISTER_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
} 