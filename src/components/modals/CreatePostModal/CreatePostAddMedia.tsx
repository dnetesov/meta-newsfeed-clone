import { HiOutlinePhotograph } from "react-icons/hi";
import { FaUserTag } from "react-icons/fa";
import { AiOutlineSmile } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineGif } from "react-icons/hi2";
import { BiSolidVideoPlus } from "react-icons/bi";

function CreatePostAddMedia() {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        px-3
        py-4
        border-neutral-600
        border-[1px]
        border-solid
        rounded-lg
    "
    >
      <p className="text-sm">
        <span className="text-neutral-200">Add to your post</span>{" "}
        <span className="text-xs text-neutral-400">(to be implemented)</span>
      </p>
      <div className="flex gap-3">
        <HiOutlinePhotograph className="text-green-600" size={28} />
        <FaUserTag className="text-blue-600" size={28} />
        <AiOutlineSmile className="text-yellow-600" size={28} />
        <FaLocationDot className="text-orange-600" size={28} />
        <HiOutlineGif className="text-teal-600" size={28} />
        <BiSolidVideoPlus className="text-red-600" size={28} />
      </div>
    </div>
  );
}

export default CreatePostAddMedia;
