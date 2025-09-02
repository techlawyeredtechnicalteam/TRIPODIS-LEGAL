import React from "react";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";
import { PRACTICE_AREAS } from "../../utils/constant";

const PrivateEquity: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-16">
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/corporate.webp"
              alt="Corporate Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Private Equity
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                The members of our private equity practice have great insight
                into the private equity sector stemming from our deep
                understanding of the dynamics of the industry. It's key
                participants and continuous engagement with active private
                capital investors in West Africa. We combine our private equity
                experience and our transaction execution capabilities in
                investments, mergers and acquisitions with contemporary in-depth
                tax and regulatory advisory to give our clients practical, cost
                effective legal advice and integrated private equity experience.
                We regularly advise assest managers, investment funds and
                institutional investors on a wide range of legal and regulatory
                issues relating to their investment and assest classes. We also
                represent portfolio companies of our private equity fund clients
                in connection with their financing, mergers and acquisitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-8 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Practice Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.slice(1, 4).map((area, index) => (
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
export default PrivateEquity;
