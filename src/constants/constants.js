import { code, sesa, foodie, coffee, hooper, leader, uoa, p1ac, bg } from "../assets";
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
    title: "President of SESA",
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
  }
];

export const about = [
  {
    paragraphs: [
      {
        text: "I am passionate about solving problems that make a positive difference in people's lives. Currently, I achieve this as software development intern at ",
        link: {
          url: "https://www.emergencyq.com/",
          text: "Emergency Q",
        },
        additional_text:
          ", an award-winning healthtech company that reduces wait times and overcrowding in hospital emergency departments and urgent care clinics.",
      },
      {
        text: "For 2024, I am the President of ",
        link: {
          url: "https://www.sesa.org.nz/",
          text: "SESA",
        },
        additional_text:
          " - the Software Engineering Students' Association at the University of Auckland.",
      },
    ],
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

// export const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];
