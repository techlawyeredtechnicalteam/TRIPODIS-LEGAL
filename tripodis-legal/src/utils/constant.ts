// import {}
// import { FaHome } from "react-icons/fa";

import type { NavItem } from "../types/NavItem";
import type { ServiceArea } from "../types/ServiceArea";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },  
  { label: "People", href: "/people" },  
];

export const PRACTICE_AREAS: ServiceArea[] = [
  {
    id: "1",
    title: "Corporate and Commercial Law",
    description: "Comprehensive legal services for businesses of all sizes.",
    icon: "building",
    image: "/corporate law.png"
  },
  {
    id: "2",
    title: "Property Law",
    description:
      "Property transactions, development, and real estate litigation.",
    icon: "home",
    image: "/corporate law.png"
  },
  {
    id: "3",
    title: "Litigation and Dispute Resolution",
    description:
      "Property transactions, development, and real estate litigation.",
    icon: "home",
    image: "/corporate law.png"
  },
  {
    id: "4",
    title: "Sports Law",
    description:
      "Property transactions, development, and real estate litigation.",
    icon: "home",
    image: "/corporate law.png"
  },
  {
    id: "5",
    title: "Entertainment Law",
    description:
      "Property transactions, development, and real estate litigation.",
    icon: "home",
    image: "/corporate law.png"
  },
  {
    id: "6",
    title: "Criminal Law",
    description:
      "Property transactions, development, and real estate litigation.",
    icon: "home",
    image: "/corporate law.png"
  }
];

export const COMPANY_INFO = {
  name: "TRIPODIS Legal",
  tagline:
    "Helping Clients Move Forward with Clarity and Confidence.",
  description:
    "We know the law and we make the difference through our global reach and our local knowledge specialists.",
  phone: "+2348050484447, +2347031803492",
  email: "info@tripodislegal.com",
  address:
    "69, Macpherson Avenue, Off Bourdillion Road/Queens Drive, Ikoyi, Lagos, Nigeria",
  Hours: "9AM - 6PM Mon - Fridays. 9AM - 12PM Saturdays."
};
