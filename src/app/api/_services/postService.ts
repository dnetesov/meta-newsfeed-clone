import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Post } from '@/types/postTypes';

// Create a new post
export const createPost = async (postData: Post) => {
  const postToCreate = {
    ...postData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  const postsCollection = collection(db, 'posts');
  const newPostDocRef = await addDoc(postsCollection, postToCreate);
  return newPostDocRef.id; // Return the new post ID
};

export const getPost =async (id: string) => {
  // TODO: implement
}

// Retrieve all posts
export const getPosts = async () => {
  const postsCollection = collection(db, 'posts');
  const querySnapshot = await getDocs(postsCollection);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Update a post by ID
// export const updatePost = async (postId: string, postData: Post) => {
//   const postRef = doc(db, 'posts', postId);
//   await updateDoc(postRef, postData);
// };

// Delete a post by ID
export const deletePost = async (postId: string) => {
  const postRef = doc(db, 'posts', postId);
  await deleteDoc(postRef);
};
