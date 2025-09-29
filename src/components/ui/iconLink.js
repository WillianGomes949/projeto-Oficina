
export default function IconLink({ children, color = 'blue', className = '', href = '#', target, rel }) {

  
  const baseIconStyle =
    "inline-flex items-center justify-center text-lg " + 
    "rounded-full p-1.5 transition-all duration-300 " +
    "hover:scale-110 hover:shadow-lg " + 
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"; 

 
  const colorSchemes = {
    red: "bg-red-600 text-white",
    blue: "bg-blue-700 text-white",
    green: "bg-green-600 text-white",
    gray: "bg-gray-500 text-white",
    redLine: "border-2 border-red-600 text-red-600",
    blueLine: "border-2 border-blue-700 text-blue-700",
    greenLine: "border-2 border-green-600 text-green-600",
    grayLine: "border-2 border-gray-500 text-white-gray-500",
  };

  return (
    <a
      href={href}
      target={target} 
      rel={rel}   
      className={`${baseIconStyle} ${colorSchemes[color]} ${className}`}
    >
      {children}
    </a>
  );
}
