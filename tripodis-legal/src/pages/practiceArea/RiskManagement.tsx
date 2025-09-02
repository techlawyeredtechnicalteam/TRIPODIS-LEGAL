import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";

const RiskManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-16">
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/property.webp"
              alt="Property Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Compliance & Risk Management
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                We offer our experitse to businesses looking to establish or
                expand their ethical culture as well as multi-jurisdictional
                organizations seeking to ensure compliance with the U.S Foreign
                Corrupt Practices Act, the U.K Bribery Act and other
                international anti-corruption treaties. We offer assistance with
                developing and rolling-out compliance manuals, undertakng
                investigations and reviewing practices.
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
