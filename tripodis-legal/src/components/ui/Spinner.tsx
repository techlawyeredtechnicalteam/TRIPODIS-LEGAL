import React from "react";

// Loading Spinner Component
interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "text-emerald-400"
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizes[size]} ${color}`}
    ></div>
  );
};
