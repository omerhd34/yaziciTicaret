import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.name || !data.phone || !data.subject || !data.message) {
      return NextResponse.json(
        { message: "Lütfen tüm zorunlu alanları doldurun" },
        { status: 400 }
      );
    }

    if (data.message.length < 10) {
      return NextResponse.json(
        { message: "Mesaj en az 10 karakter olmalıdır" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const yeniMesaj = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      subject: data.subject.trim(),
      message: data.message.trim(),
      createdAt: new Date(),
    };

    await db.collection("destekMesajlari").insertOne(yeniMesaj);

    return NextResponse.json(
      { message: "Mesajınız alındı. En kısa sürede dönüş yapacağız." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Destek mesajı kaydetme hatası:", err);
    return NextResponse.json(
      { message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const mesajlar = await db
      .collection("destekMesajlari")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ mesajlar }, { status: 200 });
  } catch (err) {
    console.error("Destek mesajları getirme hatası:", err);
    return NextResponse.json(
      { message: "Bir hata oluştu.", mesajlar: [] },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const id = body.id;

    if (!id) {
      return NextResponse.json(
        { message: "Mesaj ID gereklidir." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    const result = await db
      .collection("destekMesajlari")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Mesaj bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Mesaj başarıyla silindi." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Mesaj silme hatası:", err);
    return NextResponse.json(
      { message: "Silme işlemi başarısız oldu." },
      { status: 500 }
    );
  }
}
