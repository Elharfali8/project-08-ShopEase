'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/utils/data";
import StarRating from "./StarRating";

const items = [
  { id: 1, title: "Item 1", description: "Description 1" },
  { id: 2, title: "Item 2", description: "Description 2" },
  { id: 3, title: "Item 3", description: "Description 3" },
  { id: 4, title: "Item 4", description: "Description 4" },
  { id: 5, title: "Item 5", description: "Description 5" },
  { id: 6, title: "Item 6", description: "Description 6" },
];

const getVisibleCards = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
};

const ResponsiveCarousel = ({data}: {data: Testimonial[]}) => {
  const [index, setIndex] = useState(0);
  const visibleCards = getVisibleCards();

  const next = () => setIndex((prev) => Math.min(prev + 1, items.length - visibleCards));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
      <div className=" overflow-hidden">
          <div className="relative container main-container w-full overflow-hidden  mx-auto p-4">
      {/* Buttons */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <button
          onClick={prev}
          className="bg-gray-800 text-white p-2 rounded-full disabled:opacity-50"
          disabled={index === 0}
        >
          <ChevronLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <button
          onClick={next}
          className="bg-gray-800 text-white p-2 rounded-full disabled:opacity-50"
          disabled={index === items.length - visibleCards}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Cards */}
      <motion.div
        className="flex gap-4 overflow-hidden"
        animate={{ x: `-${index * (100 / visibleCards)}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      >
                  {data.map((item) => {
                      const {id, rate, description, title, name} = item
                      return (
                          <div key={id} className="min-w-[calc(100%/1)] sm:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/4)] p-4 bg-gray-100 rounded-lg shadow-md">
                              <StarRating rate={rate} />
                              <h2 className="font-bold text-xl lg:text-2xl mt-2">{name}</h2>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                      )
        })}
      </motion.div>
    </div>
    </div>
  );
};

export default ResponsiveCarousel;
