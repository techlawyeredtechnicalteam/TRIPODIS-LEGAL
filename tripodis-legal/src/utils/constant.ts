//
import type { NavItem } from "../types/NavItem";
import type { TeamMember } from "../types/People";
import type { ServiceArea } from "../types/ServiceArea";
// import {
//   CrystalStructure,
//   BackgroundEffects
// } from "../components/sections/BackgroundEffect";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-page" },
  { label: "People", href: "/people" }
];

export const PRACTICE_AREAS: ServiceArea[] = [
  {
    id: "1",
    title: "Corporate and Commercial Law",
    image: "/corporate.webp",
    href: "corporate and commercial-law"
  },
  {
    id: "2",
    title: "Property Law",
    image: "/property.webp",
    href: "property-law"
  },
  {
    id: "3",
    title: "Sports Law",
    image: "/sports.webp",
    href: "sport-law"
  },
  {
    id: "4",
    title: "Entertainment Law",
    image: "/entertainment.webp",
    href: "entertainment-law"
  },
  {
    id: "5",
    title: "Litigation",
    image: "/litigation.webp",
    href: "litigation"
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
    src: "/hero-bg1.jpg",
    alt: "Hero Image 1"
  },
  {
    src: "/hero-bg2.jpg",
    alt: "Hero Image 2"
  }
];
