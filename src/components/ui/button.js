// components/Button.js
"use client";

import { RiLoader4Line } from "@remixicon/react";
import React from "react";


const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  className = "",
  fullWidth = true,
  rounded = true,
}) => {
  // Configurações de variante
  const variantStyles = {
    primary: "mt-4 bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",
    secondary:
      "mt-4 bg-orange-500 hover:bg-orange-600 text-white border border-orange-500",
    outline:
      "mt-4 bg-transparent hover:bg-gray-100 text-gray-100 hover:text-gray-700 border border-gray-100 borde-2",
  };

  // Configurações de tamanho
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Classes base
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    disabled:opacity-50 disabled:cursor-not-allowed
    ${rounded ? "rounded-lg" : "rounded-full"}
    ${fullWidth ? "w-full" : ""}
  `;

  const combinedClasses = `
    ${baseClasses}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const getIconSize = () => {
    switch (size) {
      case "sm":
        return 16;
      case "lg":
        return 20;
      default:
        return 18;
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {/* Loading spinner */}
      {loading && (
        <RiLoader4Line className="animate-spin" size={getIconSize()} />
      )}

      {/* Ícone à esquerda */}
      {icon && iconPosition === "left" && !loading && (
        <RiLoader4Line  className="mr-2" size={getIconSize()} />
      )}

      {children}

      {/* Ícone à direita */}
      {icon && iconPosition === "right" && !loading && (
        <RiLoader4Line className="ml-2" size={getIconSize()} />
      )}
    </button>
  );
};

export default Button;
