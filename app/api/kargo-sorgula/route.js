import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const telefon = searchParams.get("telefon");

    if (!telefon) {
      return NextResponse.json(
        { success: false, message: "Telefon numarası gereklidir" },
        { status: 400 }
      );
    }

    const temizTelefon = telefon.replace(/[\s\-\(\)]/g, "");

    if (temizTelefon.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Lütfen geçerli bir telefon numarası giriniz (en az 10 hane)",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const kargolar = await db
      .collection("talepler")
      .find({
        telefon: {
          $regex: new RegExp(
            `^${temizTelefon.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
            "i"
          ),
        },
      })
      .sort({ olusturmaTarihi: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      kargolar,
    });
  } catch (error) {
    console.error("Kargo sorgulama hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
