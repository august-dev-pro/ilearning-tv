import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type ShowMoreProps = {
  isExpanded: boolean;
  onToggle: () => void;
};

const ShowMore: React.FC<ShowMoreProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="w-full grid grid-cols-[1fr_150px_1fr] mt-4 md:mt-10 items-center">
      <div className="border-b border-b-gray-300 h-fit"></div>
      <button
        onClick={onToggle}
        className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm bg-gray-50 px-4 py-2 rounded-full border border-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-md hover:scale-105
    transition-all duration-300 ease-in-out
    focus:outline-none  "
      >
        {isExpanded ? (
          <>
            <FiChevronUp className="text-lg" />
            Moins
          </>
        ) : (
          <>
            <FiChevronDown className="text-lg" />
            Plus
          </>
        )}
      </button>
      <div className="border-b border-b-gray-300 h-fit"></div>
    </div>
  );
};

export default ShowMore;
