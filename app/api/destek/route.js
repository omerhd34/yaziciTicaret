import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Destek Formu Gönderildi:", data);

    return NextResponse.json({ message: "Mesaj alındı." }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Bir hata oluştu." }, { status: 500 });
  }
}
