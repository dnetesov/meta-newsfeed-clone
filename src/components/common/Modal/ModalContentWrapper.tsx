import React from "react";

interface ModalContentWrapperProps {
  showModal: boolean;
  children: JSX.Element[];
}

function ModalContentWrapper({
  children,
  showModal,
}: ModalContentWrapperProps) {
  return (
    <div
      className={`
          translate
          duration-300
          h-full
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
        `}
    >
      <div
        className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-neutral-800
              outine-none
              focus:outline-none
            "
      >
        {children}
      </div>
    </div>
  );
}

export default ModalContentWrapper;
