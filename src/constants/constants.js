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
    title: "Leader & Change Maker",
    img: leader,
  },
  {
    title: "Penultimate Software Engineering Student",
    img: uoa,
  },
  {
    title: "Engineering Tutor",
    img: p1ac,
  },
  {
    title: "Hooper",
    img: hooper,
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
          ", an award-winning healthtech company that reduces wait times and overcrowding in hospitals, emergency departments and urgent care clinics.",
      },
      {
        text: "For 2024, I am the President of ",
        link: {
          url: "https://www.sesa.org.nz/",
          text: "SESA",
        },
        additional_text:
          " - the Software Engineering Students Association at the University of Auckland.",
      },
    ],
  },
];

export const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

export const projects = [
  {
    name: "XV",
    description:
      "X/Twitter clone. Developed in a team of 5 at the SESA x WDCC Hackathon 2023.",
    stack: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    img: xv,
    github_url: "https://github.com/tonylxm/sesa-x-wdcc-hackathon",
    deployed_url: "https://tonylxm.github.io/sesa-x-wdcc-hackathon",
  },
  {
    name: "Potioncraft",
    description:
      "EsAIpe room game. Integration of OpenAI API personifies wizard GameMaster.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    img: potioncraft,
    github_url: "https://github.com/tonylxm/escAIpe-room-game-potioncraft",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
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
