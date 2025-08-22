// Card Component

import React from "react";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, hover, className }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg ${
        hover
          ? "hover:shadow-xl transition-all duration-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
