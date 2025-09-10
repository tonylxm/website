import xv from "/projects/XV.jpg";
import potioncraft from "/projects/potioncraft.jpg";
import plantr from "/projects/plantr.png";
import hackathonWebsite from "/projects/hackathon-website.png";
import sesaWebsite from "/projects/sesa-website.jpg";
import jobspeakAI from "/projects/jobspeak-ai.png";

export const projects = [
    {
    name: "JobSpeak AI",
    role: ["Co-Founder"],
    description:
      "Multimodal AI agent and ML system to analyse job video interview responses and provide personalised and actionable feedback.",
    img: jobspeakAI,
    techStack: ["Azure AI Foundry", "HuggingFace ML models", "Docker", "TypeScript", "Python", "FastAPI" ],
    github_url: "https://github.com/alux444/jobspeak-ai",
    deployed_url: null,
  },
  {
    name: "Plantr 🌱",
    role: ["Developer"],
    description:
      "🥇 1st place at the 2024 DEVS Hackathon. Match users with plants based on their preferences.",
    img: plantr,
    techStack: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "OpenAI API", "Pixabay API",],
    github_url: "https://github.com/LocalhostLtd/DEV-Hackathon-2024",
    deployed_url: null,
  },
  {
    name: "wdccxsesahackathon.com",
    role: ["Project Manager", "Developer"],
    description:
      "Project managed a team of 9 to build a central hub for the annual WDCC x SESA Hackathon. Register, view past winners and more.",
    img: hackathonWebsite,
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github_url: "https://github.com/sesauoa/wdccxsesahackathon.com",
    deployed_url: "https://wdccxsesahackathon.com/",
  },
  {
    name: "SESA Website",
    role: ["Project Manager", "Tech Lead", "Developer"],
    description:
      "Refreshed the SESA website with modern frameworks and designs for 2024.",
    img: sesaWebsite,
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github_url: "https://github.com/sesauoa/sesa.org.nz",
    deployed_url: "https://sesa.org.nz/",
  },
  {
    name: "Potioncraft",
    role: ["Developer"],
    description:
      "EsAIpe room game. Integration of OpenAI API personifies wizard GameMaster.",
    img: potioncraft,
    techStack: ["Java", "JavaFX", "CSS", "OpenAI API"],
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
