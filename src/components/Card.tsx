import { type HTMLAttributes } from "react";

type CardSize = "sm" | "md" | "lg" | "full" | "auto";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
  width?: string;
  height?: string;
}

const baseStyles =
  "bg-white border border-gray-200 rounded-xl p-4 shadow-sm transition hover:shadow-md";

const sizeStyles: Record<CardSize, string> = {
  sm: "w-40 h-40",
  md: "w-60 h-60",
  lg: "w-80 h-80",
  full: "w-full h-full",
  auto: "w-auto h-auto",
};

export function Card({
  size = "md",
  width,
  height,
  className = "",
  children,
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}