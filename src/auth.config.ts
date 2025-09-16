import type {NextAuthConfig} from 'next-auth';
import {DEFAULT_REDIRECT} from "@/src/app/lib/routes";

export const authConfig = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Checking if the user is logged in
      const isLoggedIn = !!auth?.user;
      // Determining if the user is currently on the dashboard
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // Handling authorization logic based on user status and location
      if (isOnDashboard) {
        // Redirecting unauthenticated users to the login page when attempting to access dashboard-related pages
        return isLoggedIn;
      } else if (isLoggedIn) {
        // Redirecting authenticated users to the dashboard if they attempt to access authentication-related pages like login/signup
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
      }
      // Allowing access for other scenarios
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;