import React from "react";
import { Container, Badge } from "../ui";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="success" className="mb-4">
              About Tripodis
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-800 mb-6">
              Helping Clients Move Forward with Clarity and Confidence
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Tripodis Legal, we deliver comprehensive legal services
              designed to meet the dynamic needs of today&apos;s businesses.
              With our base in the heart of Lagos&apos; commercial center, we
              are strategically positioned to serve clients with interests
              across Nigeria and the West African sub-region. Our approach is
              driven by a commitment to excellence, professionalism, and ethical
              practice. Rather than viewing law as a theoretical exercise, we
              see it as a practical tool for business growth and risk
              management. We work closely with companies and individuals to
              provide tailored legal support that aligns with their strategic
              goals. Whether navigating complex regulations or identifying
              emerging opportunities, Tripodis Legal is a trusted partner in
              helping clients move forward with clarity and confidence.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  At Tripodis Legal, we deliver comprehensive legal services
                  designed to meet the dynamic needs of today&apos;s businesses.
                  With our base in the heart of Lagos&apos; commercial center,
                  we are strategically positioned to serve clients with
                  interests across Nigeria and the West African sub-region. Our
                  approach is driven by a commitment to excellence,
                  professionalism, and ethical practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutSection;
