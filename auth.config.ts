import type { NextAuthConfig } from 'next-auth';
import prisma from './lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { User } from '@prisma/client';
import { getUser } from './auth';
import { usePathname } from 'next/navigation';
import { headers } from 'next/headers'
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.toString() === '/';
      if (isOnHome) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  async signIn({ user, account }) {
      console.log(user, account)
      if (user && account) {
        const { provider } = account
        if (provider === "github") {
          // user.username = "blabla51"
        }
        return true
      }
      return false
    },
    jwt({token, user}) {
      if (user) token.user = user as User
      return token
    },
    session({token, session}) {
      session.user = token.user as User
      return session
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;