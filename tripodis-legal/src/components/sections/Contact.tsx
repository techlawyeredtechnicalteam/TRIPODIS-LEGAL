import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail, MdArrowRightAlt } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { COMPANY_INFO } from "../../utils/constant";
import { Badge, Button, Card, Container, Input, Modal } from "../ui";

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
      <section className="py-16 sm:py-24 bg-slate-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="success" className="mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Ready to Discuss Your Legal Needs?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact us today for a consultation. Our experienced legal team
                is here to help you navigate complex legal challenges with
                confidence.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-slate-300">{COMPANY_INFO.phone}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MdAlternateEmail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-slate-300">{COMPANY_INFO.email}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GrLocationPin className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-medium">Visit Us</div>
                    <div className="text-slate-300">{COMPANY_INFO.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send us a message
              </h3>
              <Button
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                className="w-full"
                icon={MdArrowRightAlt}
                iconPosition="right"
              >
                Open Contact Form
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Us"
      >
        <div onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
          <div className="space-y-1">
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
          </div>
          <div className="flex gap-3">
            <Button onClick={handleSubmit} variant="primary" className="flex-1">
              Send Message
            </Button>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ContactSection;
