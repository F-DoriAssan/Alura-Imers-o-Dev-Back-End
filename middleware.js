import { NextResponse } from 'next/server'; // Importar NextResponse

export const middleware = (request) => {
  const authToken = request.cookies.get("authToken") || "";
  const path = request.nextUrl.pathname;

  // Paths that do not require authentication
  const publicPaths = [
    "/api/login",
    "/api/signup",
    "/api/login-user",
    
  ];

  // Allow access to public paths
  if (publicPaths.some(p => typeof p === 'string' ? path === p : p.test(path))) {
    return null;
  }

  const loggedInUserNotAccessPath = path === "/login" || path === "/signup";

  // If user is not logged in and tries to access protected paths
  if (!authToken) {
    if (path.startsWith("/api") || path === "/dashboard") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else {
    // If user is logged in and tries to access login or signup page
    if (loggedInUserNotAccessPath) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
};

export const config = {
  matcher: ["/", "/login", "/signup", "/dashboard", "/api/:path*"],
};