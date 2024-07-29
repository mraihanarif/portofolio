import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
 
export const projectsData = [
  {
    title: "Website Mapping Diskominfo Jawa Barat",
    description:
      "My final project in collaboration with Diskominfo West Java, in creating the Diskominfo West Java Free Wifi Mapping application.",
    tags: ["HTML","PHP", "CSS", "MySQL", "CodeIgniter", "Leaflet.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Sirasti",
    description:
      "Sirasti is an Infrastructure Information System application used by staff at PT.INTI to view information on the IT Division.",
    tags: ["HTML","PHP", "CSS", "MySQL", "CodeIgniter"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Aplikasi Antrian",
    description:
      "This is a project request to Disdukcapil Merangin Jambi, to create a Digital Queue Application.",
    tags: ["HTML","PHP", "Tailwind", "AdminLTE", "Laravel", "MySQL"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "CodeIgniter",
  "Laravel",
  "Framer Motion",
] as const;
