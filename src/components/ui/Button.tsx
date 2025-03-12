import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-[var(--background-color-button)] text-[var(--text-button)] rounded-lg hover:bg-[var(--hover-color-button)] transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
