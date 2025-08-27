import React from "react";
import { Container, Card } from "../../components/ui";

const GabrielPeter: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("About");

  const tabs = ["About", "Professional Affiliations"];

  const practiceAreas = [
    "Corporate",
    "Criminal Litigation",
    "Commercial",
    "Civil Dispute Resolution"
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
                    src="/Ileanwa Peter.jpg"
                    alt="Ileanwa Peter"
                    className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                  />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Gabriel Ileanwa Peter
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
                About Gabriel Ileanwa Peter
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  Gabriel Ileanwa Peter has established a footing as a Nigerian
                  lawyer with a reputation for delivering exceptional legal
                  solutions across diverse practice areas. As Partner in
                  Tripodis, he brings a rare blend of technical expertise,
                  strategic thinking, and an unwavering commitment to client
                  success.
                </p>
                <p>
                  With a strong grounding in corporate, commercial, criminal
                  litigation, and civil dispute resolution, Ileanwa has
                  represented clients in high-stake matters spanning corporate
                  transactions, regulatory compliance, complex litigation, real
                  estate, and constitutional rights enforcement. His deep
                  understanding of Nigeria&apos;s legal and business environment
                  enables him to provide tailored, pragmatic advice that
                  achieves both immediate and long-term results. Beyond his law
                  practice, Ileanwa serves as the Secretary of the Nigerian Bar
                  Association, Eti-Osa Branch, where he works closely with the
                  executive committee to advance professional ethics, capacity
                  building for lawyers, and community engagement. He has been
                  actively involved in inter-branch collaborations, legal
                  education programs, and advocacy for access to justice.
                </p>
                <p>
                  Known for his attention to detail, persuasive advocacy, and
                  results-driven approach, ileanwa has earned the trust of
                  corporate entities, entrepreneurs, and individuals alike. His
                  work is guided by the belief that law is not just a profession
                  but a tool for building sustainable businesses, protecting
                  rights, and shaping society.
                </p>
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
                  <p className="text-gray-600">
                    Secretary of the Nigerian Bar Association, Eti-Osa Branch
                  </p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Container>
    </div>
  );
};
export default GabrielPeter;
