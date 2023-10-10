"use client"

import { useState } from "react";

interface TooltiProps {
  content: string;
  id: string;
  place?: "right" | "left" | "top" | "bottom";
  children: JSX.Element;
  delayMs: number
}

function Tooltip({ content, id, children, delayMs }: TooltiProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  let hoverTimeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setShowTooltip(true);
    }, delayMs);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setShowTooltip(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          id={id}
          role="tooltip"
          className=" whitespace-nowrap absolute z-10 px-3 py-2 text-sm font-medium text-gray-900 bg-neutral-300 border border-gray-200 rounded-lg shadow-sm opacity-90 tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
