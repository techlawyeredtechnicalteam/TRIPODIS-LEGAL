import React from "react";

// Button Component
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  children,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-500 text-white focus:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105",
    secondary:
      "bg-slate-600 hover:bg-slate-700 text-white focus:ring-slate-500",
    outline:
      "border-2 border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500",
    ghost:
      "text-white hover:text-blue-400 hover:bg-white/10 focus:ring-white/20"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="mr-2 h-4 w-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2 h-4 w-4" />}
    </button>
  );
};
