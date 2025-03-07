import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { NextRequestWithAuth } from "next-auth/middleware"

export default async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req })
  const isAuth = !!token
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return null
  }

  if (!isAuth) {
    let from = req.nextUrl.pathname
    if (req.nextUrl.search) {
      from += req.nextUrl.search
    }

    return NextResponse.redirect(
      new URL(`/auth/login?from=${encodeURIComponent(from)}`, req.url)
    )
  }

  // Handle role-based access
  if (req.nextUrl.pathname.startsWith("/premium") && token.role !== "PREMIUM") {
    return NextResponse.redirect(new URL("/upgrade", req.url))
  }

  return null
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/premium/:path*",
    "/auth/:path*",
    "/api/protected/:path*",
  ],
} 