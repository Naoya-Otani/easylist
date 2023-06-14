import React, { useState } from "react";
import Star from "@/src/components/atoms/Star";

type OnStarsSelected = (selectedStars: number) => void;

const StarRating = ({
  totalStars = 5,
  onStarsSelected,
}: {
  totalStars?: number;
  onStarsSelected: OnStarsSelected;
}) => {
  const [selectedStars, setSelectedStars] = useState(3);
  const handleStarSelected = (selected: number) => {
    setSelectedStars(selected);
    onStarsSelected(selected);
  };
  return (
    <div className="flex">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => handleStarSelected(i + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;
