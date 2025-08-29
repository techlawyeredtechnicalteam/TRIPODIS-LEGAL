import React from "react";
import { Card } from "../components/ui";
import type { ServiceArea } from "../types/ServiceArea";

interface PracticeAreaCardProps {
  area: ServiceArea;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ area }) => {
  return (
    <Card className="group relative overflow-hidden h-full flex-1">
      {/* Image Container */}
      <div className="relative h-48 lg:h-72 overflow-hidden">
        <img
          src={area.image}
          alt={area.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
      </div>

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Card>
  );
};
export default PracticeAreaCard;
