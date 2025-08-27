import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "never",
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/sitemap-") ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next/static|.*\\..*).*)"],
};
