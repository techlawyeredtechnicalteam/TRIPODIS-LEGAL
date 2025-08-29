import React from "react";
import { Container, Card } from "../../components/ui";

const Nurudeen: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("About");

  const tabs = ["About", "Qualification", "Professional Affiliations"];

  const practiceAreas = [
    "Civil & Criminal Litigation",
    "Child Protection",
    "Welfare, Legal Advisory & Contract Drafting",
    "Commercial Law",
    "Entertainment",
    "Social Development Strategy & Program Design",
    "Regulatory Compliance & Risk Management"
  ];

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-24 lg:pb-16">
      <Container size="full">
        {/* Profile Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card hover className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/Nurudeen Abimaje.webp"
                    alt="Nurudeen Abimaje"
                    className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                  />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Nurudeen Abimaje
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">Partner</p>

                  {/* Practice Areas */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">
                      Practice Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {practiceAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-blue-500/20 text-gray-800 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8">
            <div className="border-b border-white/20">
              <nav className="block space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? "border-blue-400 text-gray-800"
                        : "border-transparent text-gray-600 hover:text-gray-600 hover:border-white/30"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Tab Content */}

        <Container className="p-8" size="full">
          {activeTab === "About" && (
            <div className="w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                About Nurudeen Abimaje
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  He began his professional legal career with A.A Sangei and Co
                  in 2015 as an Associate where he majored in Civil & Criminal
                  Litigation, Child Protection & Welfare, Legal Advisory &
                  Contract Drafting, Corporate & Commercial Law, Social
                  Development Strategy & Program Design, Regulatory Compliance &
                  Risk Management and delivering excellent legal advise to
                  clients in diverse areas of law.
                </p>
                <p>
                  In 2024, he joined UNICEF as a United Nation Volunteer,
                  overseeing birth registration across 5 north-eastern states
                  and assignment that lasted until 2025 when he returned to
                  active legal practice as a partner at Tripodis Legal.
                </p>
                <p>
                  He is an active member of the NBA and a devoted legal
                  practitioner championing the cause of justice and driving
                  community transformation through inclusive legal practices and
                  development initiatives that protect the rights of children
                  and strengthen society
                </p>
              </div>
            </div>
          )}

          {activeTab === "Qualification" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Qualification
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Master of Arts in Law & Diplomacy (MALD)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Bachelor of Law. LLB Kogi State, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Professional Affiliations" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Professional Affiliations
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Nigerian Bar Association</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">UNICEF Volunteer, 2024</p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Container>
    </div>
  );
};
export default Nurudeen;
