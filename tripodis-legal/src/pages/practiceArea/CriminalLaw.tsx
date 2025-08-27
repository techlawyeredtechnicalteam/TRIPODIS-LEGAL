import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { useNavigate } from "react-router";
import { Container } from "../../components/ui";
// import { FaArrowRight } from "react-icons/fa6";
import PracticeAreaCard from "../PracticeAreaCard";

const CriminalLaw: React.FC = () => {
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
          <span className="text-gray-900">Criminal Law</span>
        </div>
      </Container> */}

      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/criminal.jpg"
              alt="Criminal Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Criminal Law
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                At our firm, we provide skilled legal representation for clients
                facing criminal allegations. We guide clients through police
                investigations, bail applications, trials, and appeals. Our team
                defends cases such as theft, fraud, assault, drug offenses, and
                white-collar crimes with professionalism and commitment. We
                combine thorough case preparation with strong courtroom advocacy
                to protect our clients&apos; rights. Where possible, we seek
                favorable settlements or reduced charges, while vigorously
                defending clients at trial when necessary.
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
export default CriminalLaw;
