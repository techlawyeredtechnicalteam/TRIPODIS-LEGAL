import React from "react";
import { Container } from "../components/ui";
import { PRACTICE_AREAS } from "../utils/constant";
import PracticeAreaCard from "./PracticeAreaCard";
import { useNavigate } from "react-router";

const PracticeAreaPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    navigate(href);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-24 pb-32">
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
              <PracticeAreaCard
                key={area.id}
                area={area}
                handleClick={() => handleClick(area.href)}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PracticeAreaPage;
