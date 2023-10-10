import React from "react";

interface ModalBackgroundProps {
  children: JSX.Element;
}

function ModalBackground({ children }: ModalBackgroundProps) {
  return (
    <div
      className="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-900/60
      "
    >
      <div
        className="
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto
        "
      >
        {children}
      </div>
    </div>
  );
}

export default ModalBackground;
