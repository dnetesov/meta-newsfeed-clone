"use client";

import { useRouter } from "next/navigation";
import { BsFacebook } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import { RiLoginBoxLine, RiLogoutBoxRFill } from "react-icons/ri";
import { signOut } from "@/auth/firebaseAuthHelpers";
import { useSession } from "@/auth/hooks/useSession";
import useCreatePostModal from "@/hooks/useCreatePostModal";
import useLoginModal from "@/hooks/useLoginModal";
import Avatar from "./Avatar";

function Header() {
  const router = useRouter();
  const createPostModal = useCreatePostModal();
  const loginModal = useLoginModal();
  const user = useSession();

  const handleSignout = async () => {
    await signOut();
    router.refresh();
  }

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
        <span className="text-xl">Facebook Clone</span>
      </div>

      <div role="header-icons" className="flex gap-2">
        {/* TODO: use component for circle buttons */}
        {user ? (
          <>
            <button
              title="Create Post"
              onClick={createPostModal.onOpen}
              className="bg-neutral-700 p-2 rounded-full cursor-pointer hover:bg-neutral-600 transition-transform duration-200 transform scale-100 hover:scale-105"
            >
              <IoAddSharp size={24} />
            </button>
            <button
              title="Logout"
              onClick={handleSignout}
              className="bg-neutral-700 p-2 rounded-full cursor-pointer hover:bg-neutral-600 transition-transform duration-200 transform scale-100 hover:scale-105"
            >
              <RiLogoutBoxRFill size={24} />
            </button>
            <button title={user.displayName || ''}>
              <Avatar src={user.photoURL} size={40} />
            </button>
          </>
        ) : (
          <button
            title="Login"
            onClick={loginModal.onOpen}
            className="bg-neutral-700 p-2 rounded-full cursor-pointer hover:bg-neutral-600 transition-transform duration-200 transform scale-100 hover:scale-105"
          >
            <RiLoginBoxLine size={24} />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
