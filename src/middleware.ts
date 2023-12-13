import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "./helpers/config/envConfig";
import { UserRole } from "./types/ApiResponse";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session: any = await getToken({ req: request, secret: envConfig.jwt.secret });

  const role = session?.user?.role;

  // roles
  const isAdmin = role === UserRole.admin;
  const isCustomer = role === UserRole.customer;

  // restriction conditions
  const publicRestrictionCondition = (!session && pathname.startsWith("/admin")) || (!session && pathname.startsWith("/dashboard"));
  const adminRestrictionCondition = session && !isAdmin && pathname.startsWith("/admin");
  const customerRestrictionCondition = session && !isCustomer && pathname.startsWith("/dashboard");

  // redirect conditions

  if (isAdmin && pathname === "/") {
    return NextResponse.redirect(new URL("/admin/profile", request.nextUrl));
  }

  if (adminRestrictionCondition || publicRestrictionCondition || customerRestrictionCondition) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// all routes except /api, /_next/static, /_next/image, /favicon.ico, /_next/data, /_next/server-side-rendering, /_next/webpack-hmr, /img

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|_next/data|_next/server-side-rendering|_next/webpack-hmr|img).*)"],
};
