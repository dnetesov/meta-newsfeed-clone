import { NextResponse } from "next/server";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/config/firebase";
import { docsToArray } from "@/helpers/firestore";

export async function GET() {
  // const q = query(
  //   collection(db, 'test'),
  //   where('field', '==', 'value'),
  //   orderBy('field'),
  //   limit(20)
  // );

  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    const docs = querySnapshot.docs;

    const result = docsToArray(docs);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
