//
import React from "react";
import { useNavigate } from "react-router";
import { PRACTICE_AREAS } from "../../utils/constant";
import { Badge, Card, Container } from "../ui";

const ServiceSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    navigate(href);
  };
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-800 mb-6">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a full range of legal services tailored to meet your
            specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRACTICE_AREAS.slice(0, 4).map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              hover
            >
              <button
                type="button"
                onClick={() => handleClick(service.href)}
                className="mb-4 w-full"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
              </button>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default ServiceSection;
