import React from "react";
import { Container, Card } from "../../components/ui";

const MohammedAudu: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("About");

  const tabs = [
    "About",
    "Professional Affiliations"
    // "Publications",
    // "Notable Transactions",
    // "Awards"
  ];

  const practiceAreas = ["Sports", "Entertainment"];

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
                    src="/Kameel Audu.jpg"
                    alt="Mohammed Audu"
                    className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                  />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Muhammed-Kameel O. Audu, ACIArb (UK)
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
                About Muhammed-Kameel O. Audu
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  Muhammed-Kameel O. Audu is a Nigerian lawyer whose career
                  spans a rich blend of commercial practice areas with a strong
                  focus on sports and entertainment law. A graduate of Kogi
                  State University, Anyigba, he has built a reputation for
                  combining sound legal analysis with practical, business-minded
                  solutions. He began his practice in 2015 with Fides and
                  Fiducia as an Associate, where he worked extensively on
                  dispute resolution, oil and gas transactions, real estate
                  matters, corporate and commercial litigation, and regulatory
                  compliance. His ability to grasp complex issues quickly and
                  deliver clear, strategic advice earned him recognition among
                  colleagues and clients alike.
                </p>
                <p>
                  In 2020, he joined Greychapel as a Senior Associate, taking
                  charge of the firm&apos;s Sports and Entertainment Law
                  practice. In this role, he advised athletes, creatives,
                  production companies, and entertainment brands on contractual
                  rights, licensing, dispute resolution, and compliance with
                  industry regulations. Since 2021, Muhammed-Kameel has been a
                  Partner at Tripodis Legal, where he continues to guide clients
                  through intricate legal and regulatory landscapes. He brings
                  precision, depth, and commercial awareness to every matter he
                  handles.
                </p>
                <p>
                  He is a member of the Nigerian Bar Association and the
                  Chartered Institute of Arbitrators (UK), and is committed to
                  delivering thoughtful, detail-oriented legal counsel in every
                  engagement.
                </p>
              </div>
            </div>
          )}

          {/* {activeTab === "Qualification" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Qualification
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Master of Arts (M.A) Degree</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    International Executive Postgraduate Diploma (IEPGD) with
                    distinction
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Called to the Nigerian Bar (1993)
                  </p>
                </div>
              </div>
            </div>
          )} */}

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
                  <p className="text-gray-600">
                    Chartered Institute of Arbitrators (UK)
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
export default MohammedAudu;
