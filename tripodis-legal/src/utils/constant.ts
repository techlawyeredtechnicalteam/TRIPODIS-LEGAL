//
import type { NavItem } from "../types/NavItem";
import type { TeamMember } from "../types/People";
import type { ServiceArea } from "../types/ServiceArea";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-page" },
  { label: "People", href: "/people" }
];

export const PRACTICE_AREAS: ServiceArea[] = [
  {
    id: "1",
    title: "Private Equity",
    image: "/private equity.jpg",
    href: "Private Equity"
  },
  {
    id: "2",
    title: "Mergers, Acquisitions and Corporate Restructuring",
    image: "/corporate-restructuring.jpg",
    href: "Mergers, Acquisitions and Corporate Restructuring"
  },
  {
    id: "3",
    title: "Sports Law",
    image: "/sports.webp",
    href: "sport-law"
  },
  {
    id: "4",
    title: "Intellectual Property",
    image: "/intellectual property.jpg",
    href: "Intellectual Property"
  },
  {
    id: "5",
    title: "Oil and Gas",
    image: "/oil-and-gas.jpg",
    href: "Oil and Gas"
  },
  {
    id: "6",
    title: "Commercial Advisory",
    image: "/commercial-advisory.jpg",
    href: "Commercial Advisory"
  },
  {
    id: "7",
    title: "Compliance & Risk Management",
    image: "/risk.webp",
    href: "Compliance & Risk Management"
  },
  {
    id: "8",
    title: "Dispute Resolution",
    image: "/dispute resolution.webp",
    href: "Dispute Resolution"
  },
  {
    id: "9",
    title: "Real Estate",
    image: "/real estate.jpg",
    href: "Real Estate"
  },
  {
    id: "10",
    title: "Banking and Finance",
    image: "/banking.jpg",
    href: "Banking and Finance"
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
    href: "Muhammed K. Audu"
  },
  {
    id: "2",
    name: "Gabriel Ileanwa Peter",
    position: "Partner",
    image: "/Ileanwa Peter.webp",
    href: "Gabriel Ileanwa Peter"
  },
  {
    id: "3",
    name: "Nurudeen Abimaje",
    position: "Partner",
    image: "/Nurudeen Abimaje.webp",
    href: "Nurudeen Abimaje"
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
