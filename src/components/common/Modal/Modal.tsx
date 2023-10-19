"use client";

import React, { useCallback, useEffect, useState } from "react";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalContentWrapper from "./ModalContentWrapper";
import ModalBackground from "./ModalBackground";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
      // 300ms for animations
    }, 300);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalBackground>
        <ModalContentWrapper showModal={showModal}>
          <ModalHeader title={title} handleClose={handleClose} />
          <ModalBody body={body} />
          <ModalFooter
            onSubmit={onSubmit}
            actionLabel={actionLabel}
            secondaryAction={secondaryAction}
            secondaryActionLabel={secondaryActionLabel}
            footer={footer}
            disabled={disabled}
          />
        </ModalContentWrapper>
      </ModalBackground>
    </>
  );
}

export default Modal;
