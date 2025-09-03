import React from "react";
import { Card } from "../components/ui";
import type { ServiceArea } from "../types/ServiceArea";

interface PracticeAreaCardProps {
  area: ServiceArea;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ area }) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-100 h-64 md:h-72">
      {/* Image Container */}
      <div className="relative h-full overflow-hidden">
        <img
          src={area.image}
          alt={area.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white">{area.title}</h3>
        </div>
      </div>

      {/* Hover Accent */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
    </Card>
  );
};
export default PracticeAreaCard;
