import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    res.json({ message: "You are already not logged in" });
  } else {
    const serialized = serialize("OursiteJWT", null, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "Successfully logged out!" });
  }
}
