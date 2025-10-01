import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(request) {
  try {
    const { adSoyad, telefon, adres, aciklama, teslim } = await request.json();

    // Validation
    if (!adSoyad || !telefon || !adres || !teslim) {
      return NextResponse.json(
        { success: false, message: "Lütfen tüm zorunlu alanları doldurun" },
        { status: 400 }
      );
    }

    // Telefon numarası basit validasyonu
    if (telefon.length < 10) {
      return NextResponse.json(
        { success: false, message: "Geçersiz telefon numarası" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const yeniTalep = {
      adSoyad: adSoyad.trim(),
      telefon: telefon.trim(),
      adres: adres.trim(),
      teslim: teslim,
      aciklama: aciklama ? aciklama.trim() : "",
      durum: "Hazırlanıyor",
      olusturmaTarihi: new Date(),
    };

    const result = await db.collection("talepler").insertOne(yeniTalep);

    return NextResponse.json(
      {
        success: true,
        message: "Talep başarıyla oluşturuldu",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Talep oluşturma hatası:", error);
    return NextResponse.json(
      { success: false, message: `Sunucu hatası: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const talepler = await db
      .collection("talepler")
      .find({})
      .sort({ olusturmaTarihi: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      talepler,
    });
  } catch (error) {
    console.error("Talepler getirme hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası", talepler: [] },
      { status: 500 }
    );
  }
}
