import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

function temizleTelefon(telefon) {
  return telefon.replace(/\D/g, "");
}

function telefonValidasyonu(telefon) {
  const temizTelefon = temizleTelefon(telefon);
  if (temizTelefon.length !== 11) {
    return {
      gecerli: false,
      mesaj: "Telefon numarası 11 haneli olmalıdır",
    };
  }
  if (!temizTelefon.startsWith("0")) {
    return {
      gecerli: false,
      mesaj: "Telefon numarası 0 ile başlamalıdır",
    };
  }
  return {
    gecerli: true,
    temizTelefon: temizTelefon,
  };
}

export async function POST(request) {
  try {
    const { adSoyad, telefon, adres, aciklama, teslim } = await request.json();
    if (!adSoyad || !telefon || !adres || !teslim) {
      return NextResponse.json(
        { success: false, message: "Lütfen tüm zorunlu alanları doldurun" },
        { status: 400 }
      );
    }

    const telefonKontrol = telefonValidasyonu(telefon);
    if (!telefonKontrol.gecerli) {
      return NextResponse.json(
        { success: false, message: telefonKontrol.mesaj },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const yeniTalep = {
      adSoyad: adSoyad.trim(),
      telefon: telefonKontrol.temizTelefon,
      adres: adres.trim(),
      teslim: teslim,
      aciklama: aciklama ? aciklama.trim() : "",
      durum: "Yeni İstek",
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
