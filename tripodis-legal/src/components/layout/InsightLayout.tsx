import React from "react";
import { Container } from "../ui";

interface InsightsLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const InsightsLayout: React.FC<InsightsLayoutProps> = ({
  children,
  title,
  subtitle,
  icon
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-white border-b border-gray-200">
        <Container>
          <div className="py-12 text-center">
            <div className="flex justify-center mb-4">{icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </Container>
      </div>
      <Container className="py-12">{children}</Container>
    </div>
  );
};

export default InsightsLayout;
