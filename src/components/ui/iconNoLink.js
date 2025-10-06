
export default function IconNoLink({ children, color = 'blue', className = '', size = 'xs'}) {

  
  const baseIconStyle =
    "inline-flex items-center justify-center" + 
    "transition-all duration-300 " +
    "hover:scale-110 hover:shadow-lg " + 
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"; 

 
  const colorSchemes = {
    red: "bg-red-600 text-white",
    blue: "bg-blue-700 text-white",
    green: "bg-green-600 text-white",
    gray: "bg-gray-500/40 text-white",
  };
  const sizeSchemes = {
    xs: "text-2xs p-1 rounded-full",
    sm: "text-sm p-1.5 rounded-full",
    md: "text-lg p-2 rounded-full",
    lg: "text-xl p-2.5 rounded-full",
  };

  return (
    <span
      className={`${baseIconStyle} ${colorSchemes[color]} ${sizeSchemes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
