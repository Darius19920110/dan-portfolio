import * as jose from "jose";
import { TextEncoder } from "text-encoder";
import { serialize } from "cookie";

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET);
const alg = "HS256";

export default async function (req, res) {
  const { username, password } = req.body;

  if (
    username.toLowerCase() === process.env.NEXT_PUBLIC_USERNAME &&
    password === process.env.NEXT_PUBLIC_PASSWORD
  ) {
    const token = await new jose.SignJWT({ "urn:example:claim": true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer("urn:example:issuer")
      .setAudience("urn:example:audience")
      .setExpirationTime("30d")
      .sign(secret);

    const serialized = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
