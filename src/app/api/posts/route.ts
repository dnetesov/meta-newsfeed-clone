import { NextResponse } from "next/server";
import {
  addDoc,
  getDocs,
  collection,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/config/firebase";
import { docsToArray } from "@/helpers/firestore";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const q = query(collection(db, "posts"), orderBy("date"), limit(20));

  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const docs = querySnapshot.docs;

    const result = docsToArray(docs);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  const { newPost } = await request.json();

  // TODO: read about best practices

  try {
    // TODO: Create collection if not exist?
    const response = await addDoc(collection(db, "posts"), newPost);

    return NextResponse.json({}, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
