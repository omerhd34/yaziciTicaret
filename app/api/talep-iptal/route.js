import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Talep ID'si gereklidir" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yazici");

    const talep = await db
      .collection("talepler")
      .findOne({ _id: new ObjectId(id) });

    if (!talep) {
      return NextResponse.json(
        { success: false, message: "Talep bulunamadı" },
        { status: 404 }
      );
    }

    if (talep.durum !== "Yeni İstek" && talep.durum !== "İstek İnceleniyor") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Bu talep artık iptal edilemez. Sadece 'Yeni İstek' ve 'İstek İnceleniyor' durumundaki talepler iptal edilebilir.",
        },
        { status: 400 }
      );
    }

    const result = await db.collection("talepler").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          durum: "İptal Edildi",
          iptalTarihi: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Talep bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Talep başarıyla iptal edildi",
    });
  } catch (error) {
    console.error("Talep iptal hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
