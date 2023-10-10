import React from "react";
import PostHeader from "./components/PostHeader";

import {
  Post as IPost,
  PostInteractions as IPostInteractions,
} from "@/types/postTypes";
import PostContent from "./components/PostContent";
import PostInteractions from "./components/PostInteractions";

interface PostProps {
  post: IPost;
  interactions: IPostInteractions;
}

function Post({ post, interactions }: PostProps) {
  return (
    <div
      className="
      bg-neutral-800
        rounded-md
        w-full
        max-w-screen-md
        px-4
      "
    >
      <PostHeader
        authorName={post.author.fullName}
        avatarSrc={post.author.profilePictureUrl}
        time={post.post.timestamp}
      />
      <PostContent content={post.post.content} />
      <PostInteractions
        commentsCount={post.post.commentsCount}
        sharesCount={post.post.sharesCount}
      />
    </div>
  );
}

export default Post;
