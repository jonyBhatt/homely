/**
 * An array of routes that are accessible to the public
 * These routes do noi require authentication
 * @type {string[]}
 */
export const publiceRoutes: string[] = ["/"];
/**
 * An array of routes that are accessible to the public
 * These routes will redirect logged in users
 * @type {string[]}
 */
export const authRoutes: string[] = ["/login", "/register"];
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API routes
 * @type {string}
 */
export const apiAuthPrefix = "/api";

export const DEFAULT_LOGIN_REDIRECT = "/";
