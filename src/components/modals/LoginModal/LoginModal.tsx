"use client";

import React from "react";
import Modal from "@/components/common/Modal/Modal";
import useLoginModal from "@/hooks/useLoginModal";
import LoginModalBody from "./LoginModalBody";

const bodyContent = (
  <LoginModalBody />
);

function LoginModal() {
  const loginModal = useLoginModal();

  return (
    <Modal
      title="Login"
      body={bodyContent}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      actionLabel="Cancel"
      onSubmit={loginModal.onClose}
    />
  );
}

export default LoginModal;
