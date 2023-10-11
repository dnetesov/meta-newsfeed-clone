import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  label: string;
}

function Button({ disabled = false, onClick, title, label }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        w-full
        text-white
        ${disabled ? "bg-neutral-400" : "bg-blue-600"}
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
        ${disabled ? "" : "hover:bg-blue-500"}
        focus:ring-2
        focus:ring-blue-300
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        focus:outline-none
      `}
    >
      {label}
    </button>
  );
}

export default Button;
