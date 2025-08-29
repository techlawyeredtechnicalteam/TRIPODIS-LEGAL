import React from "react";
import { Link } from "react-router";
import { Container } from "../../components/ui";
import PracticeAreaCard from "../PracticeAreaCard";
import { PRACTICE_AREAS } from "../../utils/constant";

const CorporateLaw: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-16">
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative">
            <img
              src="/corporate.webp"
              alt="Corporate Law"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Corporate and Commercial Law
            </h1>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                At our firm, we provide comprehensive corporate legal services
                tailored to the needs of each client. We assist with company
                formation, draft and review corporate agreements, and advise
                board on governance, compliance and risk management. Our team
                also represents clients in negotiations, regulatory processess
                and dispute resolution. With a blend of legal expertise and
                practical business insight, we help companies navigate
                challenges, seize opportunities, and achieve long-term success
                while remaining fully compliant with the law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-8 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Practice Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.slice(1, 4).map((area, index) => (
              <Link to={`/${area.href}`} key={index} className="cursor-pointer">
                <PracticeAreaCard area={area} />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default CorporateLaw;
