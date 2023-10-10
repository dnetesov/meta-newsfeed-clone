"use client";

import useCreatePostModal from "@/hooks/useCreatePostModal";
import React, { useState } from "react";
import { LiaGlobeSolid } from "react-icons/lia";
import Modal from "../../common/Modal/Modal";
import Avatar from "../../Avatar";
import CreatePostTextarea from "./CreatePostTextarea";

function CreatePostModal() {
  const [modalDisabled, setModalDisabled] = useState(true);

  // const handle

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar size={40} src="/images/avatar_placeholder.png" />
        <div>
          <p className="">User Name</p>
          <div className="flex gap-1 items-center justify-center text-xs bg-neutral-700 rounded p-1">
            <LiaGlobeSolid size={16} />
            <span>Public</span>
          </div>
        </div>
      </div>

      <div>
        <CreatePostTextarea setModalDisabled={setModalDisabled} userName="Test User" />
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
      onSubmit={() => {}}
    />
  );
}

export default CreatePostModal;
