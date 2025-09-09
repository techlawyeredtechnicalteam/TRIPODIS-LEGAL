//
import type { NavItem } from "../types/NavItem";
import type { TeamMember } from "../types/People";
import type { ServiceArea } from "../types/ServiceArea";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-page" },
  { label: "People", href: "/people" },
  { label: "Insight", href: "/insight" }
];

export const PRACTICE_AREAS: ServiceArea[] = [
  {
    id: "1",
    title: "Intellectual Property",
    image: "/intellectual property.webp",
    href: "practiceArea/Intellectual-Property"
  },
  {
    id: "2",
    title: "Dispute Resolution",
    image: "/dispute resolution.webp",
    href: "practiceArea/Dispute-Resolution"
  },

  {
    id: "3",
    title: "Commercial Advisory",
    image: "/commercial-advisory.webp",
    href: "practiceArea/Commercial-Advisory"
  },
  {
    id: "4",
    title: "Entertainment Law",
    image: "/entertainment.webp",
    href: "practiceArea/entertainment-law"
  },
  {
    id: "5",
    title: "Private Equity",
    image: "/private equity.webp",
    href: "practiceArea/Private-Equity"
  },
  {
    id: "6",
    title: "Oil and Gas",
    image: "/oil-and-gas.webp",
    href: "practiceArea/Oil-and-Gas"
  },
  {
    id: "7",
    title: "Sports Law",
    image: "/sports.webp",
    href: "practiceArea/sport-law"
  },
  {
    id: "8",
    title: "Compliance & Risk Management",
    image: "/risk.webp",
    href: "practiceArea/Compliance-&-Risk-Management"
  },
  {
    id: "9",
    title: "Mergers, Acquisitions and Corporate Restructuring",
    image: "/corporate-restructuring.webp",
    href: "practiceArea/Mergers-Acquisitions-and-Corporate-Restructuring"
  },
  {
    id: "10",
    title: "Real Estate",
    image: "/real estate.webp",
    href: "practiceArea/Real-Estate"
  },
  {
    id: "11",
    title: "Banking and Finance",
    image: "/banking.webp",
    href: "practiceArea/Banking-and-Finance"
  }
];

export const COMPANY_INFO = {
  name: "TRIPODIS Legal",
  tagline: "Helping Clients Move Forward with Clarity and Confidence.",
  phone: "+2348050484447, +2347031803492",
  email: "info@tripodislegal.com",
  address:
    "69, Macpherson Avenue, Off Bourdillion Road/Queens Drive, Ikoyi, Lagos, Nigeria",
  Hours: "9AM - 6PM Mon - Fridays. 9AM - 12PM Saturdays."
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Muhammed K. Audu",
    position: "Partner",
    image: "/Kameel Audu.webp",
    href: "profile/Muhammed-K.-Audu"
  },
  {
    id: "2",
    name: "Gabriel Ileanwa Peter",
    position: "Partner",
    image: "/Ileanwa Peter.webp",
    href: "profile/Gabriel-Ileanwa-Peter"
  },
  {
    id: "3",
    name: "Nurudeen Abimaje",
    position: "Partner",
    image: "/Nurudeen.jpg",
    href: "profile/Nurudeen-Abimaje"
  },
  {
    id: "4",
    name: "Ebuka Stanley Emechebe",
    position: "Partner",
    image: "/Ebuka Emechebe.webp"
  }
];

export const sliderImages = [
  {
    src: "/hero-bg1.webp",
    alt: "Hero Image 1"
  },
  {
    src: "/hero-bg2.webp",
    alt: "Hero Image 2"
  }
];
