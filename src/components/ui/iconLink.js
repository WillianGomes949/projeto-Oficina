export default function IconLink({ 
  children, 
  color = 'blue', 
  className = '', 
  href = '#', 
  target, 
  rel, 
  size = 'md',
  variant = 'solid'
}) {
  
  const baseIconStyle = `
    inline-flex items-center justify-center
    transition-all duration-300 ease-out
    hover:scale-110 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current
    active:scale-95
  `;

  // Color schemes for solid variant
  const solidColorSchemes = {
    red: "bg-red-500 hover:bg-red-600 text-white",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    gray: "bg-slate-500 hover:bg-slate-600 text-white",
    orange: "bg-orange-500 hover:bg-orange-600 text-white",
    cyan: "bg-cyan-500 hover:bg-cyan-600 text-white",
  };

  // Color schemes for outline variant
  const outlineColorSchemes = {
    red: "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
    blue: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    green: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    gray: "border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white",
    orange: "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
    cyan: "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
  };

  // Color schemes for ghost variant
  const ghostColorSchemes = {
    red: "text-red-500 hover:bg-red-50",
    blue: "text-blue-500 hover:bg-blue-50",
    green: "text-green-500 hover:bg-green-50",
    gray: "text-slate-500 hover:bg-slate-50",
    orange: "text-orange-500 hover:bg-orange-50",
    cyan: "text-cyan-500 hover:bg-cyan-50",
  };

  const colorSchemes = {
    solid: solidColorSchemes,
    outline: outlineColorSchemes,
    ghost: ghostColorSchemes,
  };

  const sizeSchemes = {
    xs: "w-8 h-8 text-sm rounded-lg",
    sm: "w-10 h-10 text-base rounded-xl",
    md: "w-12 h-12 text-lg rounded-xl",
    lg: "w-14 h-14 text-xl rounded-2xl",
  };

  const selectedColorScheme = colorSchemes[variant]?.[color] || colorSchemes.solid.blue;
  const selectedSizeScheme = sizeSchemes[size] || sizeSchemes.md;

  return (
    <a
      href={href}
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      className={`
        ${baseIconStyle}
        ${selectedColorScheme}
        ${selectedSizeScheme}
        ${className}
      `.trim().replace(/\s+/g, " ")}
    >
      {children}
    </a>
  );
}