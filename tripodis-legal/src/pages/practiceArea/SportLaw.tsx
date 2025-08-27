import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link, useNavigate } from "react-router";
import { Container } from "../../components/ui";
import { FaArrowRight } from "react-icons/fa6";
import PracticeAreaCard from "../PracticeAreaCard";

const SportLaw: React.FC = () => {
  const navigate = useNavigate();

  const handlePracticeAreaClick = (area: (typeof PRACTICE_AREAS)[0]) => {
    navigate(area.href);
  };

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-24 lg:pb-16">
      {/* breadCrumb */}
      <Container size="full">
        <div className="flex items-center py-4 text-sm text-gray-600">
          <Link to="/practice-page" className="hover:text-blue-500">
            Practice Area
          </Link>
          <FaArrowRight size={16} className="mx-2" />
          <span className="text-gray-900">Sport Law</span>
        </div>
      </Container>

      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/sports.jpg"
              alt="Sport Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sport Law
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                At our firm, we advise and represent athletes, clubs, agents,
                and organizations in negotiations and legal proceedings. We
                draft and review player contracts, sponsorship agreements, and
                licensing deals, ensuring our clients&apos; rights and
                commercial interests are protected. Our team also assists with
                regulatory compliance, arbitration, and disciplinary hearings
                before sports tribunals and governing bodies. By combining deep
                legal expertise with a clear understanding of the sports
                industry, we help clients navigate challenges, safeguard
                reputations, and maximize opportunities in the competitive world
                of sports.
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
            {PRACTICE_AREAS.slice(0, 3).map((area, index) => (
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
export default SportLaw;
