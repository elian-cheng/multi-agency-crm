import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes that do not require authentication
const publicRoutes = ["/site", "/api/uploadthing"];

export default clerkMiddleware((auth, req: NextRequest) => {
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const hostname = req.headers.get("host");

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // Handle public routes
  if (publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  // If subdomain exists, rewrite to the appropriate subdomain
  const customSubDomain = hostname?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`).filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url));
  }

  // Redirect to a specific sign-in route
  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
  }

  // Handle the root route or '/site' if the hostname matches the public domain
  if (
    url.pathname === "/" ||
    (url.pathname === "/site" && hostname === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("/site", req.url));
  }

  // Handle agency or subaccount paths
  if (url.pathname.startsWith("/agency") || url.pathname.startsWith("/subaccount")) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
  }

  return NextResponse.next();
});

// Configuration for the middleware matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};
