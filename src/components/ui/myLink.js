import Link from "next/link";
export default function MyLink ({ href, children, className = []}) {
    return (<Link
                href={href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition duration-300 ${className}`}
              >
                {children}
              </Link>);

}