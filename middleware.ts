import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "tc"];

const protectedRoutes = [
  "/stockTranscation",
  "/stockManagement",
  "/warehouseMgt",
  "/empManagement",
  "/orderManagement",
];

function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  if (locales.includes(segments[1])) {
    return `/${segments.slice(2).join("/")}`; // Remove the locale segment
  }
  return pathname;
}

export async function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  //console.log("pathname: ", pathname);

  const defaultLocale = "en";
  const currentLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  //console.log("current locale:" ,currentLocale)

  // get locale from cookie
  const cookieLocale = request.cookies.get("locale")?.value;

  // const cleanPathname = removeLocaleFromPathname(pathname); // Remove locale before checking

  //   //redirect to sign in if not authorized
  //   const session = await auth();
  //   if (protectedRoutes.some((route) => cleanPathname.startsWith(route))) {
  //     if (!session || new Date(session.expires).getTime() < Date.now()) {
  //       request.nextUrl.pathname = `/${
  //         currentLocale ?? cookieLocale ?? defaultLocale
  //       }/signin`;
  //       return NextResponse.redirect(request.nextUrl);
  //     }
  //   }

  if (currentLocale) return NextResponse.next();

  request.nextUrl.pathname = `/${cookieLocale ?? defaultLocale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal and static asset paths
    // - _next (internal assets)
    // - favicon.ico
    // - any request for a file with an extension (e.g. .png, .jpg, .svg, .js, .css)
    "/((?!api|_next|favicon.ico|.*\\..*).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
