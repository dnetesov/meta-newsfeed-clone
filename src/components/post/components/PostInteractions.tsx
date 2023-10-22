import { BiLike } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from 'react-icons/fa';
import { PiShareFatBold } from 'react-icons/pi';

interface PostInteractionsProps {
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}

function PostInteractions({
  likesCount,
  commentsCount,
  sharesCount,
}: PostInteractionsProps) {
  return (
    <footer>
      <div
        role="interactions-info"
        className="
          flex
          gap-3
          items-center
        "
      >
        <div className="flex-1 py-3 rounded-full cursor-pointer">
          <span className="flex gap-2 items-center">
            {/* TODO: fetch likes details on hover */}
            <BiLike size={16} className="text-blue-600" />{" "}
            <span className="text-sm text-neutral-400">{likesCount}</span>{" "}
          </span>
        </div>
        <span className=" text-sm text-neutral-400 cursor-pointer hover:underline">
          {commentsCount} Comments
        </span>
        <span className="text-sm text-neutral-400 cursor-pointer hover:underline">
          {sharesCount} Shares
        </span>
      </div>
      <div
        className="
          flex
          border-t
        border-neutral-700
          justify-center
          items-center
          p-[4px]
        "
      >
        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            p-2
            w-full
            cursor-pointer
            hover:bg-neutral-700
            rounded
            text-neutral-300
         "
        >
          <AiOutlineLike size={24} />
          <span className=" text-base">Like</span>
        </div>

        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            p-2
            w-full
            cursor-pointer
            hover:bg-neutral-700
            rounded
            text-neutral-300
         "
        >
          <FaRegComment size={24} />
          <span className=" text-base">Comment</span>
        </div>

        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            p-2
            w-full
            cursor-pointer
            hover:bg-neutral-700
            rounded
            text-neutral-300
         "
        >
          <PiShareFatBold size={24} />
          <span className=" text-base">Share</span>
        </div>
      </div>
    </footer>
  );
}

export default PostInteractions;
