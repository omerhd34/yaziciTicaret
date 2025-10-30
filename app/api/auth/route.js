import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { kullaniciAdi, sifre } = await request.json();

    if (!kullaniciAdi || !sifre) {
      return NextResponse.json(
        { success: false, message: "Kullanıcı adı ve şifre gereklidir" },
        { status: 400 }
      );
    }

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (kullaniciAdi === ADMIN_USERNAME && sifre === ADMIN_PASSWORD) {
      const token = Buffer.from(`${kullaniciAdi}:${Date.now()}`).toString(
        "base64"
      );

      return NextResponse.json({
        success: true,
        token,
        message: "Giriş başarılı",
      });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json(
        { success: false, message: "Kullanıcı adı veya şifre hatalı" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Auth hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}

export function verifyToken(token) {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [username] = decoded.split(":");
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    return username === ADMIN_USERNAME;
  } catch {
    return false;
  }
}
