import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === "independentcountryexpert.com") {
    const url = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      "https://www.independentcountryexpert.com"
    );
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
