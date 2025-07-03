import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@/lib/validation/user";
import { connectToDatabase } from "@/lib/db/mongodb";
import User from "@/models/user";

export async function POST(NextRequest: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await NextRequest.json();

    if (!firstName || !email || !password)
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });

    const user = userSchema.safeParse({ firstName, email, password });

    if (!user.success)
      return NextResponse.json({
        success: false,
        message: user.error.format(),
      });

    await connectToDatabase();

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return NextResponse.json({
        success: false,
        message: "user already exists",
      });

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (!newUser)
      return NextResponse.json({
        success: false,
        message: "Internal server error, try again later",
      });

    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error, please try again later",
    });
  }
}
