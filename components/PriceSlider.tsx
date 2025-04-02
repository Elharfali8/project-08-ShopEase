import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

const PriceSlider: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 1000]);

  const handleChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      {/* Min and Max Labels */}
      <div className="flex justify-between w-full text-sm text-gray-500">
        <span className="text-muted-foreground">Min: ${priceRange[0]}</span>
        <span className="text-muted-foreground">Max: ${priceRange[1]}</span>
      </div>

      {/* Slider */}
      <Slider
        value={priceRange}
        onValueChange={handleChange}
        min={0}
        max={2000}
        step={10}
        className="w-full"
      />

      {/* Display Selected Range */}
      <p className="text-gray-700 dark:text-gray-300 font-medium">
        Selected Price: ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
};

export default PriceSlider;
