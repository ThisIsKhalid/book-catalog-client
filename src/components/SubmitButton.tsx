import { SyncLoader } from "react-spinners";

interface SubmitButtonProps {
  buttonText: string;
  className?: string;
  isLoading?: boolean;
}

const SubmitButton = ({
  buttonText,
  isLoading,
  className = "",
}: SubmitButtonProps) => {
  
  return (
    <button
      type="submit"
      className={`relative rounded px-5 py-3 overflow-hidden group bg-cyan-600 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-600 transition-all ease-out duration-300 ${className}`}
    >
      <span className="absolute right-0 w-10 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-[0.3] rotate-12 group-hover:-translate-x-96 ease"></span>
      <span className="relative uppercase tracking-widest">
        {isLoading ? <SyncLoader color="#f7ede2" size={5} /> : buttonText}
      </span>
    </button>
  );
};

export default SubmitButton;
