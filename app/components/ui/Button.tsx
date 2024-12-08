import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}
const Button = ({ children, ...props }: ButtonProps) => {
  const rest = { ...props };
  return (
    <button
      {...rest}
      className={`px-6 py-2 rounded-full shadow-md text-white font-sans z-[2] relative button ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
