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
