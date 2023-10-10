import React, { useCallback } from "react";
import Button from "../Button";

interface ModalFooterProps {
  onSubmit: () => void;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

function ModalFooter({
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
  disabled,
  onSubmit,
  footer
}: ModalFooterProps) {
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  return (
    <div className="flex flex-col gap-2 p-6">
      <div
        className="
          flex
          flex-row
          items-center
          gap-4
          w-full
        "
      >
        {/* {secondaryAction && secondaryActionLabel && (
          <Button
            disabled={disabled}
            // label={secondaryActionLabel}
            onClick={handleSecondaryAction}
          />
        )} */}
        <Button
          disabled={disabled}
          label={actionLabel}
          title="Create a Post"
          onClick={handleSubmit}
        />
      </div>
      {footer}
    </div>
  );
}

export default ModalFooter;
