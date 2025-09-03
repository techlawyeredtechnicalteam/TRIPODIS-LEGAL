import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";

const DisputeResolution: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="min-h-[600px] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
        {/* Image side */}
        <div className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden">
          <img
            src="/dispute-resolution.webp"
            alt="Dispute Resolution"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">
              Dispute Resolution
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify">
              Our focus is on resolving disputes whether by litigation across
              all levels of the state and federal courts in Nigeria with the
              ability to handle proceedings in multiple jurisdictions or by
              international arbiration of commercial disputes. Our lawyers are
              some of the most experienced and resourceful litigators in Nigeria
              with the knack for dealing with our clients&apos; interest with
              creativity, efficiency and practical solutions.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify">
              They understand the intricacies of dealing with investment
              disputes and tax compliance issues that may arise in any given
              transaction. They have successfully argured cases at various
              specialist courts and panels as well as the Appeal and Supreme
              Courts. Our Arbitration team understands the sensitivity of most
              disputes arising from commercial transactions, and therefore takes
              preventive approached to disputes with the ultimate aim of
              safeguarding business relationships going forward. We poseess the
              ewquisite experience to render cutting edge arbitration service to
              our clients with the understanding that businesses increasingly
              rely on arbitration as the preferred method of dispute resolution.
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
            {PRACTICE_AREAS.slice(3, 6).map((area, index) => (
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
export default DisputeResolution;
