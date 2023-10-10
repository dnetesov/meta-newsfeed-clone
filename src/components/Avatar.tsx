// "use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
  size: number
}

function Avatar({ src, size }: AvatarProps) {
  return (
    <Image
      className="rounded-full cursor-pointer"
      height={size}
      width={size}
      alt="Avatar"
      src={src ? src : "/images/placeholder.jpeg"}
    />
  );
}

export default Avatar;
