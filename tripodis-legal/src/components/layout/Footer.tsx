import React from "react";
import { Badge, Container } from "../ui";
import { Link } from "react-router";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container size="full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-widest mb-4">
              TRIPODIS
            </h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Helping Clients Move Forward With Clarity And Confidence.
            </p>
            <div className="flex space-x-4">
              <Badge variant="default">Excellence</Badge>
              <Badge variant="default">Professionalism</Badge>
              <Badge variant="default">Ethical Practice</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Corporate Law</li>
              <li>Property Law</li>
              <li>Criminal Law</li>
              <li>Litigation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-white transition">
                  People
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-page"
                  className="hover:text-white transition"
                >
                  Practice Area
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 text-slate-400 hover:text-white transition" />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter className="w-6 h-6 text-slate-400 hover:text-white transition" />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-6 h-6 text-slate-400 hover:text-white transition" />
          </Link>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Tripodis Law Firm. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
