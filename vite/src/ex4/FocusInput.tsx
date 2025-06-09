import React from "react";
import { useRef } from "react";
const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Focus the Input" />
      <button onClick={handleFocus}>Focus Button</button>
    </div>
  );
};

export default FocusInput;
