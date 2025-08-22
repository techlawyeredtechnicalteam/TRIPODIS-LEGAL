// import {}
// import { FaHome } from "react-icons/fa";

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
    title: "Corporate Law",
    description: "Comprehensive legal services for businesses of all sizes.",
    image: "/corporate.jpg"
  },
  {
    id: "2",
    title: "Property Law",
    description:
      "Property transactions, development, and real estate litigation.",
    image: "/property.jpg"
  },
  {
    id: "3",
    title: "Litigation",
    description:
      "Property transactions, development, and real estate litigation.",
    image: "/litigation.jpg"
  },
  {
    id: "4",
    title: "Sports Law",
    description:
      "Property transactions, development, and real estate litigation.",
    image: "/sports.jpg"
  },
  {
    id: "5",
    title: "Entertainment Law",
    description:
      "Property transactions, development, and real estate litigation.",
    image: "/entertainment.jpg"
  },
  {
    id: "6",
    title: "Criminal Law",
    description:
      "Property transactions, development, and real estate litigation.",
    image: "/criminal.jpg"
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
    image: "/Kameel Audu.jpg",
    email: "kameel@tripodis.com",
    linkedin: "#"
  },
  {
    id: "2",
    name: "Gabriel Ileanwa Peter",
    position: "Partner",
    image: "/Ileanwa Peter.jpg",
    email: "peter@tripodis.com",
    linkedin: "#"
  },
  {
    id: "3",
    name: "Nurudeen Abimaje",
    position: "Partner",
    image: "/Nurudeen Abimaje.jpg",
    email: "Nurudeen@tripodis.com",
    linkedin: "#"
  },
  {
    id: "4",
    name: "Ebuka Stanley Emechebe",
    position: "Partner",
    image: "/Ebuka Emechebe.jpg",
    email: "Ebuka@tripodis.com",
    linkedin: "#"
  }
];
