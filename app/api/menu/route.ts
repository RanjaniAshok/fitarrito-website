// app/api/menu/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const menuItems = await prisma.menuItem.findMany({
    include: { category: true, addOnTypes: true },
  });
  return NextResponse.json(menuItems);
}
