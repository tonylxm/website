import {
  code,
  sesa,
  foodie,
  coffee,
  hooper,
  leader,
  uoa,
  p1ac,
  bg,
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
    title: "Penultimate Software Engineering Student",
    img: uoa,
  },
  {
    title: "Hooper",
    img: hooper,
  },
  {
    title: "Leader & Change Maker",
    img: leader,
  },
  {
    title: "Engineering Tutor",
    img: p1ac,
  },
  {
    title: "Coffee Lover",
    img: coffee,
  },
  {
    title: "Tony Lim",
    img: bg,
  },
];

export const projects = [
  {
    name: "XV",
    description:
      "Medieval X/Twitter clone. Developed in a team of 5 at the SESA x WDCC Hackathon 2023.",
    img: xv,
    github_url: "https://github.com/tonylxm/sesa-x-wdcc-hackathon",
    deployed_url: "https://tonylxm.github.io/sesa-x-wdcc-hackathon",
  },
  {
    name: "Potioncraft",
    description:
      "EsAIpe room game. Integration of OpenAI API personifies wizard GameMaster.",
    img: potioncraft,
    github_url: "https://github.com/tonylxm/escAIpe-room-game-potioncraft",
  },
];
