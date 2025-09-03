import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";

const CorporateRestructuring: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="min-h-[600px] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
          {/* Image side */}
          <div className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden">
            <img
              src="/corporate-restructuring.webp"
              alt="Corporate Restructuring"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mergers, Acquisitions and Corporate Restructuring
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                We have experience advising on various mergers and acquisition
                transactions including regulatory driven acquisitions and
                disposals in banking industry as well as strategic mergers and
                acquisitions in other sectors. We also have experience advising
                private equity and other funds with investments and exists from
                their targets.
              </p>
            </div>
          </div>
        <div className="grid lg:grid-cols-2 min-h-[500px]">
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
export default CorporateRestructuring;
