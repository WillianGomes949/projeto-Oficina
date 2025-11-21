import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function MyLink({ 
  href, 
  children, 
  className = "", 
  variant = "default",
  showExternalIcon = false,
  target,
  rel 
}) {
  
  const baseStyles = `
    font-medium
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    inline-flex items-center gap-1
  `;

  const variantStyles = {
    default: "text-slate-700 hover:text-blue-600 hover:translate-x-0.5",
    primary: "text-blue-600 hover:text-blue-700 font-semibold",
    secondary: "text-slate-600 hover:text-slate-800",
    subtle: "text-slate-500 hover:text-slate-700",
    navigation: "text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg",
  };

  const isExternal = href?.startsWith('http') || target === '_blank';
  const shouldShowIcon = showExternalIcon && isExternal;

  return (
    <Link
      href={href}
      target={target}
      rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `.trim().replace(/\s+/g, " ")}
    >
      {children}
      {shouldShowIcon && (
        <RiArrowRightUpLine className="flex-shrink-0" size={14} />
      )}
    </Link>
  );
}