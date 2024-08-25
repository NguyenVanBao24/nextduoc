import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/mee"];
const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  let sessionToken = request.cookies.get("sessionToken")?.value;

  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL(`/login`, request.nextUrl));
  }

  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL(`/mee`, request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: { ...privatePaths, ...authPaths },
};
