import Link from "next/link";
export default function MyLink ({url, children }) {
    return (<Link
                href={url}
                className={`font-semibold transition-colors duration-150 hover:text-blue-600`}
              >
                {children}
              </Link>);

}