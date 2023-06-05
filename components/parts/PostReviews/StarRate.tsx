import React, { FC } from "react";
import StarRating from "./StarRating";

const StarRate: FC<{
  setReputation: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setReputation }) => {
  const handleStarsSelected = (selectedStars: number) => {
    setReputation(selectedStars);
  };
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <label htmlFor="reputation" className="mr-2 text-gray-500">
          評価
        </label>
      </div>
      <StarRating totalStars={5} onStarsSelected={handleStarsSelected} />
    </div>
  );
};

export default StarRate;
