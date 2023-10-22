import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Avatar from "../../Avatar";
import Tooltip from "@/components/common/Tooltip";
import { Timestamp } from "firebase/firestore";

interface PostHeaderProps {
  avatarSrc: string;
  authorName: string;
  time: Timestamp;
}

const parseTimestamp = (timestamp: Date) => {
  const timeAgo = moment(timestamp).fromNow();
  const formattedDate = moment(timestamp).format("dddd, D MMMM YYYY, HH:mm");

  return {
    timeAgo,
    formattedDate,
  };
};

function PostHeader({ avatarSrc, authorName, time }: PostHeaderProps) {
  const { timeAgo, formattedDate } = parseTimestamp(time.toDate());

  return (
    <header
      className="
        flex
        items-center
        gap-3
        py-3
      "
    >
      <Avatar size={40} src={avatarSrc} />

      <div className="flex flex-col flex-grow">
        <span className="self-start cursor-pointer hover:underline">{authorName}</span>

        <div className="self-start">
          <Tooltip id="time-ago-tooltip" content={formattedDate} delayMs={1000}>
            <p className="text-xs text-neutral-400 cursor-pointer hover:underline">
              {timeAgo}
            </p>
          </Tooltip>
        </div>
      </div>

      <div role="post-header-icons" className="flex gap-2">
        {/* TODO: Post header Icon component */}
        <div className="p-2 rounded-full cursor-pointer hover:bg-neutral-700 transition-transform duration-200 transform scale-100 hover:scale-105">
          <BsThreeDots size={24} className="text-neutral-400" />
        </div>

        <div className="p-2 rounded-full cursor-pointer hover:bg-neutral-700 transition-transform duration-200 transform scale-100 hover:scale-105">
          <AiOutlineClose size={24} className="text-neutral-400" />
        </div>
      </div>
    </header>
  );
}

export default PostHeader;
