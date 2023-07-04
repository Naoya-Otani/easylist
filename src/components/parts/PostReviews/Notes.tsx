import React, { useState } from "react";
import NotesModal from "./NotesModal";

const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center text-gray-500 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
          onClick={() => setIsOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <p className="ml-1 text-sm pb-[2px]" onClick={() => setIsOpen(true)}>
          注意事項
        </p>
      </div>
      <NotesModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Notes;
