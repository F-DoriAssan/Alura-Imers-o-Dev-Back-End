import connectDB from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();
  try {
    const user = await User.find({});
    return NextResponse.json({
      status: 200,
      message: "success",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
