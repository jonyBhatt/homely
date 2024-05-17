import { auth } from "./auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publiceRoutes,
} from "./utils/routes";
export default auth((req) => {
  const { nextUrl } = req;
  const loggedInUser = !!req.auth;

  const isAPIPrefix = nextUrl.pathname.startsWith(apiAuthPrefix);
  const publicRoutes = publiceRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isAPIPrefix) {
    return;
  }

  if (isAuthRoutes) {
    if (loggedInUser) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!loggedInUser && !publicRoutes) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
