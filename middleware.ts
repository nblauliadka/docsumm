import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isAppRoute = pathname.startsWith('/app')
  const isAuthRoute = pathname.startsWith('/auth')

  const token =
    request.cookies.get('sb-access-token') ||
    request.cookies.get('sb-refresh-token')

  if (isAppRoute && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/app/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/app/:path*', '/auth/:path*'],
}