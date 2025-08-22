import React from "react";
import { Container, Card, Button } from "../components/ui";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "../utils/constant";

const People: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <Container size="full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8">
              Our People
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
              At Tripodis Legal, our lawyers are well experienced and trained to
              understand your business objectives in order to render legally
              sound and practical advice.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 lg:py-20">
        <Container size="full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <Container size="md">
          <Card className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Ready to work with our team?
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Contact us today to discuss how our experienced legal
              professionals can help with your business objectives.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 hover:shadow-blue-500/25"
            >
              Contact Us
            </Button>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default People;
