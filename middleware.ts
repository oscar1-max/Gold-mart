import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const protectedRoutes = [
    "/admin",
    "/seller/dashboard",
    "/orders",
  ];

  const needsProtection = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  if (needsProtection) {
    // Preparation stage:
    // Authentication will be connected here later
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/seller/dashboard/:path*",
    "/orders/:path*",
  ],
};
