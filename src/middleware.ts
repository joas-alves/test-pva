import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value
  const urlLocale = req.nextUrl.locale

  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  if (urlLocale === 'default') {
    return NextResponse.redirect(
      new URL(`/${cookieLocale  || 'global'}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }
}
