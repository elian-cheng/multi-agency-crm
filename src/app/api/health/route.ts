import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Perform a lightweight query to check the database connection
    const result = await db.$queryRaw`SELECT 1`;

    return NextResponse.json({ status: "OK", message: "App and DB are healthy", result });
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      { status: "ERROR", message: "Database connection failed" },
      { status: 500 }
    );
  }
}
