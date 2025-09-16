import NextAuth from 'next-auth';
import { authConfig } from '@/src/auth.config';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN } from '@/src/app/lib/routes'

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(LOGIN, nextUrl));
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|hero-*.png|_next/customers|favicon.ico).*)'],
};
