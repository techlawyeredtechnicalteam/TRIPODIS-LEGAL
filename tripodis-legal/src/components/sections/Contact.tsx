import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail, MdArrowRightAlt } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { COMPANY_INFO } from "../../utils/constant";
import { Badge, Button, Card, Container, Input, Modal } from "../ui";
import { ContactSectionAnimation } from "../animation/ContactSectionAnimation";

interface ContactSectionProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  isModalOpen,
  setIsModalOpen
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <motion.section
        className="py-16 sm:py-24 bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={ContactSectionAnimation.containerVariants}
      >
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={ContactSectionAnimation.containerVariants}
          >
            {/* Left Column */}
            <motion.div variants={ContactSectionAnimation.leftColumnVariants}>
              <motion.div variants={ContactSectionAnimation.headerItemVariants}>
                <Badge variant="success" className="mb-4">
                  Get In Touch
                </Badge>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl font-light text-white mb-6"
                variants={ContactSectionAnimation.headerItemVariants}
              >
                Ready to Discuss Your Legal Needs?
              </motion.h2>
              <motion.p
                className="text-lg text-slate-300 mb-8"
                variants={ContactSectionAnimation.headerItemVariants}
              >
                Contact us today for a consultation. Our experienced legal team
                is here to help you navigate complex legal challenges with
                confidence.
              </motion.p>

              <motion.div
                className="space-y-6"
                variants={ContactSectionAnimation.containerVariants}
              >
                <motion.div
                  className="flex items-center"
                  variants={ContactSectionAnimation.contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaPhone className="w-6 h-6 text-blue-400 mr-4" />
                  </motion.div>
                  <div>
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-slate-300">{COMPANY_INFO.phone}</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  variants={ContactSectionAnimation.contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MdAlternateEmail className="w-6 h-6 text-blue-400 mr-4" />
                  </motion.div>
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-slate-300">{COMPANY_INFO.email}</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  variants={ContactSectionAnimation.contactItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GrLocationPin className="w-6 h-6 text-blue-400 mr-4" />
                  </motion.div>
                  <div>
                    <div className="text-white font-medium">Visit Us</div>
                    <div className="text-slate-300">{COMPANY_INFO.address}</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={ContactSectionAnimation.rightColumnVariants}>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <motion.h3
                  className="text-2xl font-semibold text-white mb-6"
                  variants={ContactSectionAnimation.headerItemVariants}
                >
                  Send us a message
                </motion.h3>
                <motion.div
                  variants={ContactSectionAnimation.headerItemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="primary"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full"
                      icon={MdArrowRightAlt}
                      iconPosition="right"
                    >
                      Open Contact Form
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>

      {/* Contact Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Us"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ContactSectionAnimation.modalVariants}
        >
          <motion.div
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={ContactSectionAnimation.containerVariants}
          >
            <motion.div variants={ContactSectionAnimation.formFieldVariants}>
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            <motion.div variants={ContactSectionAnimation.formFieldVariants}>
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div variants={ContactSectionAnimation.formFieldVariants}>
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </motion.div>

            <motion.div
              className="space-y-1"
              variants={ContactSectionAnimation.formFieldVariants}
            >
              <label className="block text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                rows={4}
                placeholder="How can we help you?"
                required
              />
            </motion.div>

            <motion.div
              className="flex gap-3"
              variants={ContactSectionAnimation.formFieldVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  className="w-full"
                >
                  Send Message
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Modal>
    </>
  );
};
export default ContactSection;
