import React from "react";
import { Card } from "../components/ui";
import type { ServiceArea } from "../types/ServiceArea";
// import { PRACTICE_AREAS } from "../utils/constant";

const PracticeAreaCard: React.FC<{ area: ServiceArea }> = ({ area }) => {
  return (
    <Card className="overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 lg:h-72 overflow-hidden">
        <img
          src={area.image}
          alt={area.title}
          className="object-cover w-full h-full transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 mb-3">
          {area.title}
        </h3>
        {/* <p className="text-gray-400 mb-4 leading-relaxed">{area.description}</p> */}
      </div>
    </Card>
  );
};
export default PracticeAreaCard;
