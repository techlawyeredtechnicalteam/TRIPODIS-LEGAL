import React from "react";
import { Container } from "../components/ui";
import { PRACTICE_AREAS } from "../utils/constant";
import PracticeAreaCard from "./PracticeAreaCard";
import { Link } from "react-router";

const PracticeAreaPage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-24">
      {/* Hero Section */}
      <section>
        <Container size="full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8">
              Practice Areas
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
              We provide a full range of specialized legal and business advisory
              services in various areas of the law.
            </p>
          </div>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 lg:py-20">
        <Container size="full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => (
              <Link to={`/${area.href}`}>
                <PracticeAreaCard key={area.id} area={area} />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PracticeAreaPage;
