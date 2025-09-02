import React from "react";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";

const DisputeResolution: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-16">
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/dispute-resolution.webp"
              alt="Dispute Resolution"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dispute Resolution
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Our focus is on resolving disputes whether by litigation across
                all levels of the state and federal courts in Nigeria with the
                ability to handle proceedings in multiple jurisdictions or by
                international arbiration of commercial disputes. Our lawyers are
                some of the most experienced and resourceful litigators in
                Nigeria with the knack for dealing with our clients&apos;
                interest with creativity, efficiency and practical solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                They understand the intricacies of dealing with investment
                disputes and tax compliance issues that may arise in any given
                transaction. They have successfully argured cases at various
                specialist courts and panels as well as the Appeal and Supreme
                Courts. Our Arbitration team understands the sensitivity of most
                disputes arising from commercial transactions, and therefore
                takes preventive approached to disputes with the ultimate aim of
                safeguarding business relationships going forward. We poseess
                the ewquisite experience to render cutting edge arbitration
                service to our clients with the understanding that businesses
                increasingly rely on arbitration as the preferred method of
                dispute resolution.
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
