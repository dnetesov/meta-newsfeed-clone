import { useEffect, useState } from "react";

interface CreatePostTextareaProps {
  userName: string;
  setModalDisabled: (disabled: boolean) => void;
}

const XL_TEXT_CHAR_LIMIT = 84;

function CreatePostTextarea({
  userName,
  setModalDisabled,
}: CreatePostTextareaProps) {
  const [applyXlTextSize, setApplyXlTextSize] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    setModalDisabled(value.length === 0);

    if (value.length > XL_TEXT_CHAR_LIMIT && applyXlTextSize) {
      setApplyXlTextSize(false);
    } else if (value.length <= XL_TEXT_CHAR_LIMIT && !applyXlTextSize) {
      setApplyXlTextSize(true);
    }
  }, [value, applyXlTextSize, setModalDisabled]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={`What's on your mind, ${userName}`}
      className={`
        ${applyXlTextSize ? "text-xl" : "text-sm"}
        w-full
        border-none
        bg-transparent
        outline-none
        resize-none
      `}
    />
  );
}

export default CreatePostTextarea;
