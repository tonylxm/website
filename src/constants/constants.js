import {
  code,
  sesa,
  foodie,
  hooper,
  leader,
  hackathon_winner,
  uoa,
  dlp,
  blue,
} from "../assets";
import { xv, potioncraft } from "../assets/projects";

export const hero = [
  {
    head_text: "Tony Lim",
    sub_text: "Software engineer based in Auckland, New Zealand",
  },
];

export const titles = [
  {
    title: "Software Engineer",
    img: code,
  },
  {
    title: "President of SESA (2024)",
    img: sesa,
  },
  {
    title: "Foodie",
    img: foodie,
  },
  {
    title: "Final Year Software Engineering Student",
    img: uoa,
  },
  {
    title: "Leader & Change Maker",
    img: leader,
  },
  {
    title: "Hackathon Winner",
    img: hackathon_winner,
  },
  {
    title: "Hooper",
    img: hooper,
  },
  {
    title: "Sir Colin Maiden Scholar",
    img: dlp,
  },
  {
    title: "Tony Lim",
    img: blue,
  },
];

export const projects = [
  {
    name: "Plantr",
    role: ["Developer"],
    description:"🥇 1st place at the 2024 DEVS Hackathon. Match users with plants based on their preferences.",
    img: potioncraft,
    techStack: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github_url: null,
    deployed_url: "https://sesa.org.nz/",
  },
  {
    name: "WDCC x SESA Hackathon Website",
    role: ["Project Manager", "Developer"],
    description: "Central hub for the annual WDCC x SESA Hackathon. Register, view past winners and more.",
    img: potioncraft,
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github_url: null,
    deployed_url: "https://sesa.org.nz/",
  },
  {
    name: "SESA Website",
    role: ["Project Manager", "Tech Lead", "Developer"],
    description: "Refreshed the SESA website with modern frameworks and designs for 2024.",
    img: potioncraft,
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github_url: null,
    deployed_url: "https://sesa.org.nz/",
  },
  {
    name: "Potioncraft",
    role: ["Developer"],
    description: "EsAIpe room game. Integration of OpenAI API personifies wizard GameMaster.",
    img: potioncraft,
    techStack: ["Java", "JavaFX", "CSS"],
    github_url: "https://github.com/tonylxm/escAIpe-room-game-potioncraft",
    deployed_url: null,
  },
  {
    name: "XV",
    role: ["Developer"],
    description:
      "Medieval X/Twitter clone. Developed in a team of 5 at the SESA x WDCC Hackathon 2023.",
    img: xv,
    techStack: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    github_url: "https://github.com/tonylxm/sesa-x-wdcc-hackathon",
    deployed_url: "https://tonylxm.github.io/sesa-x-wdcc-hackathon",
  },
];
