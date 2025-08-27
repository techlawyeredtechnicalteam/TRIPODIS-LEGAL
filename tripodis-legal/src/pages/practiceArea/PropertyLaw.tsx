import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { useNavigate } from "react-router";
import { Container } from "../../components/ui";
// import { FaArrowRight } from "react-icons/fa6";
import PracticeAreaCard from "../PracticeAreaCard";

const PropertyLaw: React.FC = () => {
  const navigate = useNavigate();

  const handlePracticeAreaClick = (area: (typeof PRACTICE_AREAS)[0]) => {
    navigate(area.href);
  };

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-24 lg:pb-16">
      {/* breadCrumb */}
      {/* <Container size="full">
        <div className="flex items-center py-4 text-sm text-gray-600">
          <Link to="/practice-page" className="hover:text-blue-500">
            Practice Area
          </Link>
          <FaArrowRight size={16} className="mx-2" />
          <span className="text-gray-900">Property Law</span>
        </div>
      </Container> */}

      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/property.jpg"
              alt="Property Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Property Law
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                At our firm, we assist clients with drafting and reviewing
                contracts, conducting due diligence, and navigating regulatory
                approvals for property transactions. We represent individuals,
                businesses, and developers in negotiations, land acquisitions,
                tenancy agreements, and property disputes. Our team combines
                in-depth legal knowledge with practical insight into the
                property market, helping clients secure their investments, avoid
                risks, and achieve their real estate goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Practice Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.slice(2, 5).map((area, index) => (
              <div key={index} className="cursor-pointer">
                <PracticeAreaCard
                  area={area}
                  handleClick={() => handlePracticeAreaClick(area)}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default PropertyLaw;
