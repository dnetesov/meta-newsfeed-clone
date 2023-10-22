import { NextResponse } from "next/server";
import {
  getDocs,
  collection,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { signInWithCustomToken } from "firebase/auth";
import { generateCustomToken } from "../_services/adminService";

import { db, auth } from "@/config/firebase";
import { docsToArray } from "@/helpers/firestore";
import { createPost } from "../_services/postService";
import { Post } from "@/types/postTypes";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  const q = query(collection(db, "posts"), orderBy("date"), limit(20));

  try {
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs;

    const result = docsToArray(docs);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  const newPost: Post = await request.json();

  // TODO: Middleware / separate function?
  const customToken = await generateCustomToken(newPost.author.userId);
  await signInWithCustomToken(auth, customToken);

  if (!newPost.author || !newPost.post.content) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  try {
    const postId = await createPost(newPost);

    return NextResponse.json({ postId }, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
