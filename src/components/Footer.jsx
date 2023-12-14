import resume from "../assets/Tony Lim Resume.pdf";
import {
  ReactSvg,
  TailwindCSSSvg,
  LinkedInSvg,
  GitHubSvg,
} from "../assets/svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 text-tertiary">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md sm:text-center flex">
            <a href="#" className="hover:underline hover:text-white">
              Tony Lim {currentYear}
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp; Made with &nbsp;
            <ReactSvg />
            &nbsp; + &nbsp;
            <TailwindCSSSvg />
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <LinkedInSvg />
            <GitHubSvg />
            &nbsp;
            <p className="ms-5 me-5">|</p>
            <a
              href={resume}
              target="_blank"
              className=" hover:text-white underline"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
