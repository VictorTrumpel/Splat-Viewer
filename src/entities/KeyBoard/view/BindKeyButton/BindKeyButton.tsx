import { useState, useEffect, useCallback } from "react";
import { KeyButton, KeyButtonProps } from "@shared";

type BindKeyButton = KeyButtonProps & {
  onPressed?: () => void;
  onPressedOut?: () => void;
  bindKeys?: string[];
};

export const BindKeyButton = ({
  bindKeys = [],
  onPressed,
  onPressedOut,
  ...props
}: BindKeyButton) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressed = () => {
    setIsPressed(true);
    onPressed?.();
  };

  const handlePressedOut = () => {
    setIsPressed(false);
    onPressedOut?.();
  };

  const keydownEvent = useCallback((keyEvent: KeyboardEvent) => {
    if (bindKeys.includes(keyEvent.code)) {
      handlePressed();
    }
  }, []);

  const keyupEvent = useCallback((keyEvent: KeyboardEvent) => {
    if (bindKeys.includes(keyEvent.code)) {
      handlePressedOut();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownEvent);
    window.addEventListener("keyup", keyupEvent);

    return () => {
      window.removeEventListener("keydown", keydownEvent);
      window.removeEventListener("keyup", keyupEvent);
    };
  }, []);

  return (
    <KeyButton
      {...props}
      data-testid="bind-key-button"
      isPressed={isPressed}
      onMouseDown={handlePressed}
      onMouseUp={handlePressedOut}
    />
  );
};
