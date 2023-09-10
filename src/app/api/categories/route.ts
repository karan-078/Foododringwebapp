import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

//  for Queary  ir is auto genrate queary bulider
// const prisma = new PrismaClient();

//  FETCH  All CCATEGORIES

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        message: "Somthin went Wrog!",
      }),
      { status: 500 }
    );
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};
