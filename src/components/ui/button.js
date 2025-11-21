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
  rounded = "lg",
}) => {
  // Configurações de variante
  const variantStyles = {
    primary: "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-sm hover:shadow-md",
    secondary: "bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-sm hover:shadow-md",
    outline: "bg-transparent hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-800",
    danger: "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-sm hover:shadow-md",
  };

  // Configurações de tamanho
  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Configurações de borda
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  // Classes base
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-95
    ${fullWidth ? "w-full" : ""}
  `;

  const combinedClasses = `
    ${baseClasses}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${className}
  `.trim().replace(/\s+/g, " ");

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

  const IconComponent = icon;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {/* Loading spinner */}
      {loading && (
        <RiLoader4Line 
          className="animate-spin mr-2" 
          size={getIconSize()} 
        />
      )}

      {/* Ícone à esquerda */}
      {!loading && icon && iconPosition === "left" && (
        <span className="mr-2">
          {React.isValidElement(icon) ? icon : <IconComponent size={getIconSize()} />}
        </span>
      )}

      {children}

      {/* Ícone à direita */}
      {!loading && icon && iconPosition === "right" && (
        <span className="ml-2">
          {React.isValidElement(icon) ? icon : <IconComponent size={getIconSize()} />}
        </span>
      )}
    </button>
  );
};

export default Button;