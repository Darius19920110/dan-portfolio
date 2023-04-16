import { NextResponse } from "next/server";
import * as jose from "jose";
import { TextEncoder } from "text-encoder";

export async function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.get("OursiteJWT");
  const url = req.nextUrl.clone();

  if (req.nextUrl.pathname.startsWith("/home")) {
    if (jwt == undefined) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    try {
      const secret = new TextEncoder().encode("SECRET12223344");

      await jose.jwtVerify(jwt, secret, {
        issuer: "urn:example:issuer",
        audience: "urn:example:audience",
      });

      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/")) {
    if (jwt) {
      try {
        const secret = new TextEncoder().encode("SECRET12223344");

        await jose.jwtVerify(jwt, secret, {
          issuer: "urn:example:issuer",
          audience: "urn:example:audience",
        });

        return NextResponse.redirect(new URL("/home", req.url));
      } catch (e) {
        return NextResponse.next();
      }
    }
  }
}

export const config = {
  matcher: ["/", "/home"],
};
