import React from "react";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";
import { PRACTICE_AREAS } from "../../utils/constant";

const PrivateEquity: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="min-h-[600px] lg:min-h-[80vh] pt-16 flex flex-col lg:flex-row overflow-hidden">
        {/* Image side */}
        <div className="lg:w-1/2 h-64 md:h-auto lg:h-auto relative overflow-hidden">
          <img
            src="/private equity.webp"
            alt="Private Equity"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">
              Private Equity
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 text-justify">
              The members of our private equity practice have great insight into
              the private equity sector stemming from our deep understanding of
              the dynamics of the industry. It's key participants and continuous
              engagement with active private capital investors in West Africa.
              We combine our private equity experience and our transaction
              execution capabilities in investments, mergers and acquisitions
              with contemporary in-depth tax and regulatory advisory to give our
              clients practical, cost effective legal advice and integrated
              private equity experience. We regularly advise assest managers,
              investment funds and institutional investors on a wide range of
              legal and regulatory issues relating to their investment and
              assest classes. We also represent portfolio companies of our
              private equity fund clients in connection with their financing,
              mergers and acquisitions.
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
            {PRACTICE_AREAS.slice(1, 4).map((area) => (
              <Link
                key={area.id}
                to={`/${area.href}`}
                className="cursor-pointer"
              >
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
