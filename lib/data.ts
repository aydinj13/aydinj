import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import firereads from "@/public/firereads.png";
import casher from "@/public/casher.png"


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

export const experiencesData = [
  {
    title: "Completed Bootcamp",
    location: "Online - Cleveland, OH",
    description:
      "I graduated after 2 years of studying. After completing this course, I joined more advanced ones.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer as a freelancer",
    location: "Fiverr - Cleveland, OH",
    description:
      "I worked as a front-end developer for 6 months on Fiverr and other softwares. I also improved on my full-stack skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Fire Reads",
    description:
      "Using only frontend languages, I was able to develop a website that helps users find books and read samples. I am currently working on a Next JS version.",
    tags: ["HTML5", "CSS", "JavaScript", "Git"],
    imageUrl: firereads,
    link: "https://aydinj13.github.io/fire-reads/index.html"
  },
  {
    title: "Casher",
    description:
      "I created a basic Expense tracker in Next JS using a special UI components library, shadcn-ui. I hope to improve it in the future!",
    tags: ["Next JS", "Shadcn-ui", "Git", "Vercel"],
    imageUrl: casher,
    link: "https://cash-er.vercel.app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Python",
  "Django",
  "Framer Motion",
] as const;
