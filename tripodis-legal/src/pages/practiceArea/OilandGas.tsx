import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";

const OilandGas: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="min-h-[600px] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
        {/* Image side */}
        <div className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden">
          <img
            src="/oil-and-gas.webp"
            alt="Oil and Gas"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">
              Oil and Gas
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify">
              Members of our oil and gas team have acted on some of the largest
              assest acqusitions in the Nigerian oil and gas industry. Clients
              have found our experience with the relevant regulations and
              practices useful in navigating the inricacies of legal and
              regulatory compliance as well as structuring and delivering
              transactions. Members of our team have particularly been involved
              in negotiating contracts in the upStream sector, as well as
              proffering advice on various exploration and production work.
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
            {PRACTICE_AREAS.slice(0, 3).map((area, index) => (
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
export default OilandGas;
