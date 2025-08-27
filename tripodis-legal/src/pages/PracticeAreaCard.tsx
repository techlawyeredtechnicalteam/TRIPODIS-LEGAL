import React from "react";
import { Card } from "../components/ui";
import type { ServiceArea } from "../types/ServiceArea";
// import { PRACTICE_AREAS } from "../utils/constant";

interface PracticeAreaCardProps {
  area: ServiceArea;
  handleClick?: () => void;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({
  area,
  handleClick
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 lg:h-72 overflow-hidden">
          <img
            src={area.image}
            alt={area.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 mb-3 group-hover:text-blue-600 transition-colors">
            {area.title}
          </h3>
          {/* <p className="text-gray-400 mb-4 leading-relaxed">{area.description}</p> */}
        </div>
      </Card>
    </button>
  );
};
export default PracticeAreaCard;
