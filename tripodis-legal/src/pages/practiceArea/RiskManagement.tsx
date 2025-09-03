import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";

const RiskManagement: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="min-h-[600px] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
        {/* Image side */}
        <div className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden">
          <img
            src="/risk.webp"
            alt="Compliance & Risk Management"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">
              Compliance & Risk Management
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify">
              We offer our experitse to businesses looking to establish or
              expand their ethical culture as well as multi-jurisdictional
              organizations seeking to ensure compliance with the U.S Foreign
              Corrupt Practices Act, the U.K Bribery Act and other international
              anti-corruption treaties. We offer assistance with developing and
              rolling-out compliance manuals, undertakng investigations and
              reviewing practices.
            </p>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">
              Related Practice Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRACTICE_AREAS.slice(2, 5).map((area, index) => (
              <Link to={`/${area.href}`} key={index} className="cursor-pointer">
                <PracticeAreaCard area={area} />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default RiskManagement;
