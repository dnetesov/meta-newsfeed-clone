"use client";

import useCreatePostModal from "@/hooks/useCreatePostModal";
import React, { useState } from "react";
import { LiaGlobeSolid } from "react-icons/lia";
import Modal from "../../common/Modal/Modal";
import Avatar from "../../Avatar";
import CreatePostTextarea from "./CreatePostTextarea";
import CreatePostAddMedia from "./CreatePostAddMedia";
import { useSession } from "@/auth/hooks/useSession";
import { Post } from "@/types/postTypes";

function CreatePostModal() {
  const user = useSession();
  const [modalDisabled, setModalDisabled] = useState(true);
  const [text, setText] = useState("");

  // TODO: move
  const handleSubmit = async () => {
    if (!user) return;

    const newPost: Post = {
      author: {
        userId: user.uid,
        profilePictureUrl: user.photoURL,
        fullName: user.displayName,
      },
      post: {
        content: text,
        //TODO: media?: MediaItem[]
        isLiked: false,
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
      },
    };

    try {
      const result = await fetch("/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      const resultJson = await result.json();
      console.log("create post result:", resultJson);

      return createPostModal.onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar size={40} src={user?.photoURL || ''} />
        <div>
          <p className="">{user?.displayName}</p>
          <div className="flex gap-1 items-center justify-center text-xs bg-neutral-700 rounded p-1">
            <LiaGlobeSolid size={16} />
            <span>Public</span>
          </div>
        </div>
      </div>

      <div>
        <CreatePostTextarea
          setModalDisabled={setModalDisabled}
          userName={user?.displayName}
          value={text}
          setValue={setText}
        />
        <CreatePostAddMedia />
      </div>
    </div>
  );

  const createPostModal = useCreatePostModal();

  return (
    <Modal
      disabled={modalDisabled}
      title="Create post"
      body={bodyContent}
      isOpen={createPostModal.isOpen}
      onClose={createPostModal.onClose}
      actionLabel="Post"
      onSubmit={handleSubmit}
    />
  );
}

export default CreatePostModal;
