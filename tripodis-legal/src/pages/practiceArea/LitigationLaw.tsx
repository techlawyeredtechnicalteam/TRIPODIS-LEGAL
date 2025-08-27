import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import {  useNavigate } from "react-router";
import { Container } from "../../components/ui";
// import { FaArrowRight } from "react-icons/fa6";
import PracticeAreaCard from "../PracticeAreaCard";

const LitigationLaw: React.FC = () => {
  const navigate = useNavigate();

  const handlePracticeAreaClick = (area: typeof PRACTICE_AREAS[0]) => {
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
          <span className="text-gray-900">Litigation Law</span>
        </div>
      </Container> */}

      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/litigation.jpg"
              alt="Litigation Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Litigation Law
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                At our firm, we provide strategic representation for individuals
                and businesses across all stages of the litigation process. We
                handle case assessment, filing, evidence gathering,
                negotiations, and courtroom advocacy. Our lawyers are skilled in
                both trial and appellate practice, ensuring clients receive
                effective representation at every level. We focus on practical
                strategies that balance legal strength with cost efficiency,
                seeking favorable outcomes through settlement where possible,
                and pursuing litigation vigorously when necessary. Our
                commitment is to protect our clients&apos; interests and deliver
                justice with professionalism and diligence.
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
            {PRACTICE_AREAS.slice(3, 6).map((area, index) => (
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
export default LitigationLaw;
