import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Badge, Container } from "../ui";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FooterAnimation } from "../animation/FooterAnimation";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Trigger animation earlier for better UX
      variants={FooterAnimation.containerVariants}
    >
      <Container size="full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <motion.div
            className="lg:col-span-2"
            variants={FooterAnimation.itemVariants}
          >
            <motion.h3
              className="text-2xl font-bold mb-4"
              variants={FooterAnimation.itemVariants}
            >
              TRIPODIS
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              variants={FooterAnimation.itemVariants}
            >
              Helping Clients Move Forward With Clarity And Confidence.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={FooterAnimation.containerVariants}
            >
              <motion.div variants={FooterAnimation.badgeVariants}>
                <Badge>Excellence</Badge>
              </motion.div>
              <motion.div variants={FooterAnimation.badgeVariants}>
                <Badge>Professionalism</Badge>
              </motion.div>
              <motion.div variants={FooterAnimation.badgeVariants}>
                <Badge>Innovation</Badge>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Practice Areas Section */}
          <motion.div variants={FooterAnimation.itemVariants}>
            <motion.h4
              className="text-lg font-semibold mb-6"
              variants={FooterAnimation.itemVariants}
            >
              Practice Areas
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={FooterAnimation.containerVariants}
            >
              {[
                {
                  text: "Corporate Law",
                  href: "/corporate and commercial-law"
                },
                { text: "Property Law", href: "/property-law" },
                { text: "Sports Law", href: "/sport-law" },
                { text: "Litigation", href: "/litigation" }
              ].map((area) => (
                <motion.li
                  key={area.text}
                  variants={FooterAnimation.itemVariants}
                >
                  <motion.span
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                    variants={FooterAnimation.linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link to={area.href}>{area.text}</Link>
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={FooterAnimation.itemVariants}>
            <motion.h4
              className="text-lg font-semibold mb-6"
              variants={FooterAnimation.itemVariants}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={FooterAnimation.containerVariants}
            >
              {[
                { text: "About Us", to: "/about" },
                { text: "People", to: "/people" },
                { text: "Practice Area", to: "/practice-areas" }
              ].map((link) => (
                <motion.li
                  key={link.text}
                  variants={FooterAnimation.itemVariants}
                >
                  <Link to={link.to}>
                    <motion.span
                      className="text-gray-300 hover:text-white transition-colors block"
                      variants={FooterAnimation.linkVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      {link.text}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Social Media and Copyright Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          variants={FooterAnimation.itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Icons */}
            <motion.div
              className="flex space-x-6"
              variants={FooterAnimation.containerVariants}
            >
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaXTwitter, href: "#", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                  variants={FooterAnimation.socialIconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm"
              variants={FooterAnimation.itemVariants}
            >
              © 2025 Tripodis Law Firm. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
};
export default Footer;
