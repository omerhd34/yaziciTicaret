import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const adSoyad = searchParams.get("adSoyad");

    if (!adSoyad) {
      return NextResponse.json(
        { success: false, message: "Ad Soyad gereklidir" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    // Ad soyad ile arama (büyük-küçük harf duyarsız)
    const kargolar = await db
      .collection("talepler")
      .find({
        adSoyad: {
          $regex: new RegExp(adSoyad, "i"),
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
