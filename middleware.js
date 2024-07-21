// app/_middleware.js or pages/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith('/_next/static/')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}