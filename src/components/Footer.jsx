import resume from "../../public/Tony Lim Resume.pdf";
import GitHubSVG from "../../public/svg/GitHubSVG";
import LinkedInSVG from "../../public/svg/LinkedInSVG";
import ReactSVG from "../../public/svg/ReactSVG";
import JavaScriptSVG from "../../public/svg/JavaScriptSVG";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 text-tertiary">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md sm:text-center flex">
            <a href="#" className="hover:underline hover:text-white flex-none">
              &copy; {currentYear} Tony Lim
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Made with &nbsp;
            <ReactSVG />
            &nbsp; + &nbsp;
            <JavaScriptSVG />
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <LinkedInSVG />
            <GitHubSVG />
            &nbsp;
            <p className="ms-5 me-5">|</p>
            <a
              href={resume}
              target="_blank"
              className=" hover:text-white hover:underline"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
