import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("yaziciticaret");

    await db.collection("destekMesajlari").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Mesaj alındı." }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Bir hata oluştu." }, { status: 500 });
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
    console.error(err);
    return NextResponse.json({ message: "Bir hata oluştu." }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const id = body.id;

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

    return NextResponse.json({ message: "Mesaj silindi." }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Silme hatası." }, { status: 500 });
  }
}
