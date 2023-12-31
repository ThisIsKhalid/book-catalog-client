import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const ButtonLink = ({ to, children, className }: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center px-10 py-3 overflow-hidden text-base font-medium text-gray-800 border-2 border-gray-800 rounded-full hover:text-white group hover:bg-gray-50 ${className}`}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-gray-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="relative">{children}</span>
    </Link>
  );
};

export default ButtonLink;
