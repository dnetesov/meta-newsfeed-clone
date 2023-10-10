import React, { ButtonHTMLAttributes, FC } from "react";
import { IconType } from "react-icons";

interface RoundIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  highlighted?: boolean;
  Icon: FC<React.ComponentProps<IconType>>;
  onClick: () => void;
}

function RoundIconButton({
  size = 24,
  Icon,
  highlighted,
  onClick,
  ...props
}: RoundIconButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`
      ${highlighted ? "bg-neutral-700" : ""}
      ${highlighted ? "hover:bg-neutral-600" : "hover:bg-neutral-700"}
      p-2
      rounded-full
      cursor-pointer
      transition-transform duration-200
      transform scale-100
      hover:scale-105
    `}
    >
      <Icon size={size} className="text-neutral-400" />
    </button>
  );
}

export default RoundIconButton;
