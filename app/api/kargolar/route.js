import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(request) {
  try {
    const { id, durum, tahminTeslimTarihi } = await request.json();

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const guncellemeler = {
      durum,
    };

    if (tahminTeslimTarihi) {
      guncellemeler.tahminTeslimTarihi = new Date(tahminTeslimTarihi);
    }

    const result = await db
      .collection("talepler")
      .updateOne({ _id: new ObjectId(id) }, { $set: guncellemeler });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Talep bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Talep güncellendi",
    });
  } catch (error) {
    console.error("Talep güncelleme hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = client.db("yaziciticaret");
    const result = await db
      .collection("talepler")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Talep bulunamadı" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Talep silindi",
    });
  } catch (error) {
    console.error("Talep silme hatası:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
