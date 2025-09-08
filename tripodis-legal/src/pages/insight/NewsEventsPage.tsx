import React from "react";
import { FaNewspaper } from "react-icons/fa6";
import InsightsLayout from "../../components/layout/InsightLayout";

const NewsEventPage: React.FC = () => {
  return (
    <InsightsLayout
      title="News & Events"
      subtitle="Stay updated with the latest news and events from Tripodis Legal."
      icon={<FaNewspaper className="text-6xl text-blue-600" />}
    >
      <div className="text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
          <FaNewspaper className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            News & Events Coming Soon
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            We're currently curating our latest news and events. Check back soon
            for updates on our activities, press releases, and upcoming events.
          </p>
        </div>
      </div>
    </InsightsLayout>
  );
};
export default NewsEventPage;
