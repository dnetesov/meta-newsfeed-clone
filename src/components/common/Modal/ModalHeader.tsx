import React from "react";
import RoundIconButton from "../RoundIconButton";
import { AiOutlineClose } from "react-icons/ai";

interface ModalHeaderProps {
  title: string;
  handleClose: () => void;
}

function ModalHeader({ title, handleClose }: ModalHeaderProps) {
  return (
    <div
      className="
        flex
        relative
        items-center
        p-6
        justify-center
        border-b-[1px]
      border-neutral-700
      "
    >
      <div
        className="
          flex
          flex-1
          text-lg
          font-semibold
          justify-center
        "
      >
        <span>{title}</span>
      </div>

      <div>
        <span className="absolute bottom-5 right-4">
          <RoundIconButton
            onClick={handleClose}
            Icon={AiOutlineClose}
            highlighted
          />
        </span>
      </div>
    </div>
  );
}

export default ModalHeader;
