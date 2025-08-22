import React from "react";
import { Card, Container } from "../components/ui";
import { TbTargetArrow } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { PiScales, PiLightbulbThin } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import { MdShield } from "react-icons/md";

const AboutUsPage: React.FC = () => {
  const stats = [
    {
      icon: TbTargetArrow,
      label: "Strategic Location",
      value: "Lagos",
      color: "text-blue-400"
    },
    {
      icon: CiUser,
      label: "Regional Coverage",
      value: "West Africa",
      color: "text-blue-400"
    },
    {
      icon: PiScales,
      label: "Legal Expertise",
      value: "Comprehensive",
      color: "text-blue-400"
    },
    {
      icon: FiAward,
      label: "Service Focus",
      value: "Business Growth",
      color: "text-blue-400"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in all our legal services, ensuring quality outcomes for every client.",
      icon: FiAward,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Professionalism",
      description:
        "Our approach is grounded in professional integrity and adherence to the highest ethical standards.",
      icon: MdShield,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Practical Innovation",
      description:
        "We view law as a practical tool for business growth, not just theoretical exercise.",
      icon: PiLightbulbThin,
      color: "bg-blue-500/20 text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
          <img
            src="/logo-1.jpg"
            alt="Lagos commercial center skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />

          {/* Logo/Brand Overlay */}
          <div className="absolute bottom-8 left-8">
            <div className="bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-black">TRIPODIS LEGAL</h2>
              <p className="text-gray-700 text-sm">Lagos Commercial Center</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8">
              About Us
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              At Tripodis Legal, we deliver comprehensive legal services
              designed to meet the dynamic needs of today&apos;s businesses.
              With our base in the heart of Lagos' commercial center, we are
              strategically positioned to serve clients with interests across
              Nigeria and the West African sub-region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our approach is driven by a commitment to excellence,
              professionalism, and ethical practice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-500 font-medium mb-4">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                Practical Legal Solutions
              </h2>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TbTargetArrow className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    Strategic Partnership
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Trusted partner for business growth
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <p className="text-gray-800 leading-relaxed mb-4">
                  Rather than viewing law as a theoretical exercise, we see it
                  as a{" "}
                  <span className="text-gray-700 font-medium">
                    practical tool for business growth and risk management
                  </span>
                  . We work closely with companies and individuals to provide
                  tailored legal support that aligns with their strategic goals.
                </p>

                <p className="text-gray-800 leading-relaxed">
                  Whether navigating complex regulations or identifying emerging
                  opportunities,{" "}
                  <span className="text-blue-500 font-medium">
                    Tripodis Legal is a trusted partner
                  </span>{" "}
                  in helping clients move forward with clarity and confidence.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-lg lg:text-xl font-bold text-gray-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Excellence, professionalism, and ethical practice drive everything
              we do at Tripodis Legal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} hover className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center ${value.color}`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutUsPage;
