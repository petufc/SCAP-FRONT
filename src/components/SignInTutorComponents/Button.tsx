import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "default" | "cancel";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "default",
}) => {
  const buttonClassName =
    variant === "cancel"
      ? "bg-gray-100 text-neutral-900 border border-gray-300 rounded-md pl-6 pb-2 pr-6 pt-2 text-sm"
      : "bg-neutral-900 text-white rounded-md pl-6 pb-2 pr-6 pt-2 text-sm";

  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
