import React from "react";
import { FaCamera } from "react-icons/fa6";
import InsightsLayout from "../../components/layout/InsightLayout";

const GalleryPage: React.FC = () => {
  return (
    <InsightsLayout
      title="Gallery"
      subtitle="Explore our gallery showcasing memorable moments, events, and achievements that highlight our journey and commitment to excellence."
      icon={<FaCamera className="text-6xl text-blue-600" />}
    >
      <div className="text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
          <FaCamera className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Gallery Coming Soon
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Our gallery is currently being curated to bring you a collection of
            inspiring images and moments. Stay tuned for updates as we prepare
            to showcase our visual journey.
          </p>
        </div>
      </div>
    </InsightsLayout>
  );
};

export default GalleryPage;
