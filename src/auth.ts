import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import prisma from "./server/db";

import { getUserByEmail, getUserById } from "./server/action/user";
import { UserRole } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential) => {
        // check is email and password fields are empty
        if (credential.email === "" || credential.password === "") {
          throw new CredentialsSignin({
            cause: "Email or Password are required",
          });
        }
        // find the user
        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credential.email as string,
        //   },
        // });
        const user = await getUserByEmail(credential.email as string);
        if (!user) {
          throw new CredentialsSignin({
            cause: "User does not exits ",
          });
        }
        const matchPassword = await bcrypt.compare(
          credential.password as string,
          user.password!,
        );

        if (!matchPassword) {
          throw new CredentialsSignin({
            cause: "Invalid password",
          });
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      console.log({
        session_token: token,
        session,
      });

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existUser = await getUserById(token.sub);

      if (!existUser) return token;

      token.role = existUser.user?.role;

      return token;
    },
  },
});
