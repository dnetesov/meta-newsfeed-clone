"use client";

import useCreatePostModal from "@/hooks/useCreatePostModal";
import { BsFacebook } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";

function Header() {
  const createPostModal = useCreatePostModal();

  return (
    <header
      className="
        flex
        fixed
        justify-between
        px-4
        py-2
        w-full
        items-center
        bg-neutral-800
        h-12
      "
    >
      <div role="logo" className="flex items-center gap-2">
        <BsFacebook size={32} />
        <span className="text-lg">Meta Clone</span>
      </div>

      <div role="header-icons" className="flex gap-2">
        <div
          onClick={createPostModal.onOpen}
          className="bg-neutral-700 p-2 rounded-full cursor-pointer hover:bg-neutral-600 transition-transform duration-200 transform scale-100 hover:scale-105"
        >
          <IoAddSharp size={24} />
        </div>
      </div>
    </header>
  );
}

export default Header;
