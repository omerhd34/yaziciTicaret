import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { kullaniciAdi, sifre } = await request.json();

    // Admin bilgileri
    const ADMIN_USERNAME = "yaziciticaret";
    const ADMIN_PASSWORD = "Selaminko123";

    if (kullaniciAdi === ADMIN_USERNAME && sifre === ADMIN_PASSWORD) {
      // Basit bir token oluştur
      const token = Buffer.from(`${kullaniciAdi}:${sifre}`).toString("base64");

      return NextResponse.json({
        success: true,
        token,
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Kullanıcı adı veya şifre hatalı" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
