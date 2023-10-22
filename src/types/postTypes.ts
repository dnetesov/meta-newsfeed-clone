import { FieldValue } from "firebase/firestore";

// Main export
export interface Post {
  author: Author;
  post: PostData;
  comments?: Comment[];
  createdAt?: FieldValue;
  updatedAt?: FieldValue;
}

export interface PostInteractions {
  onLike: () => void; //A function to handle the Like action.
  onComment: () => void; //A function to handle commenting.
  onShare: () => void; //A function to handle sharing.
}

type MediaType = "image" | "video";

interface Author {
  userId: string;
  fullName: string | null;
  profilePictureUrl: string | null;
}

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
}

export interface PostData {
  content: string; //Text content of the post.
  media?: MediaItem[]; //An array containing information about images, videos, or other media.
  isLiked: boolean; //A boolean indicating if the current user has liked the post.
  likesCount: number; //Number of likes.
  commentsCount: number; //Number of comments.
  sharesCount: number; //Number of shares.
}

export interface Comment {
  author: Author; //Comment author's information.
  content: string; //Text content of the comment.
  createdAt: string; //When the comment was poste
  updatedAt: string;
}
