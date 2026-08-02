import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          message: "You must be logged in",
        },
        {
          status: 401,
        }
      );
    }

    const body = await request.json();

    const { items, total } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const order = await prisma.order.create({
      data: {
        total,
        userId: user.id,

        items: {
          create: items.map((item: any) => ({
            quantity: item.quantity,

            productId: item.id,
          })),
        },
      },

      include: {
        items: true,
      },
    });

    return NextResponse.json(order);

  } catch (error) {
    return NextResponse.json(
      {
        message: "Order creation failed",
      },
      {
        status: 500,
      }
    );
  }
}
