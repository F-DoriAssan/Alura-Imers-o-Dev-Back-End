import connectDB from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();

  // Accede a las cookies de forma asíncrona
  const cookieStore = await cookies(); // Obtén el almacén de cookies
  const authToken = cookieStore.get("authToken")?.value || "";

  try {
    const detail = jwt.verify(authToken, process.env.JWT_SECRET);
    const id = detail.id;

    const user = await User.findById(id).select("-password");
    if (!user) {
      return NextResponse.json({
        status: 401,
        error: "User not found",
      });
    } else {
      return NextResponse.json({
        status: 200,
        data: user,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 401,
      error: "Invalid token",
    });
  }
};
