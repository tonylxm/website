import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import profile from "../assets/profile.jpg";
import resume from "../assets/Tony Lim Resume.pdf";
import Animation from "../utils/Animation";
import { titles, about } from "../constants/constants";
import TypewriterEffect from "../utils/TyperwriterEffect";
import { TYPING_SPEED } from "../utils/TypewriterSpeeds";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {}, [currentIndex]);

  // Check if cache is working as intended
  // useEffect(() => {
  //   const img = [...titles.map((title) => title.img), profile]
  //   console.log(img)
  //   cacheImages(img);
  // }, []);

  // const cacheImages = async (imgCacheArray) => {
  //   const promises = await imgCacheArray.map((src) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = resolve();
  //       img.onerror = reject();
  //     });
  //   });
  //   await Promise.all(promises);
  //   console.log("Images cached!");
  // };

  const handleTypingFinish = (index) => {
    setCurrentIndex(index);
  };

  const calculateBackgroundTransitionSpeed = () => {
    return TYPING_SPEED * titles[currentIndex].title.length;
  };

  const fadeOut = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    reset: true,
    config: { duration: calculateBackgroundTransitionSpeed() },
  });

  const backgroundImageStyle = {
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full h-screen flex justify-center items-center z-0">
      <animated.div
        className="w-full h-screen absolute z-20 brightness-50"
        style={{
          backgroundImage: `url(${
            titles[(currentIndex - 1 + titles.length) % titles.length].img
          })`,
          ...backgroundImageStyle,
          ...fadeOut,
        }}
      />
      <animated.div
        className="w-full h-screen absolute z-10 brightness-50"
        style={{
          backgroundImage: `url(${titles[currentIndex].img})`,
          ...backgroundImageStyle,
        }}
      />
      <div className="flex-[0.75] lg:flex-[0.5] z-20">
        <Animation>
          <div className="bg-secondary p-4 rounded-2xl shadow-card bg-opacity-80">
            <div className="flex justify-center">
              <div>
                <img
                  src={profile}
                  className="rounded-full pointer-events-none"
                  width="250"
                  height="250"
                />
              </div>
            </div>
            <div
              className={`${styles.sectionText} flex mt-3 justify-center items-center font-semibold text-white text-center`}
            >
              <TypewriterEffect
                titles={titles}
                currentIndex={currentIndex}
                onTypingFinish={handleTypingFinish}
              />
            </div>
            <div className="flex mt-3 justify-center items-center text-tertiary">
              <a
                href="https://www.linkedin.com/in/tonylxm/"
                target="_blank"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/tonylxm"
                target="_blank"
                className="hover:text-white ms-5"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              &nbsp;
              <p className="text-tertiary ms-5 me-5">|</p>
              <a
                href={resume}
                target="_blank"
                className={`${styles.sectionText} hover:text-white underline`}
              >
                Resume
              </a>
            </div>
            <div className={`${styles.sectionText} text-left mt-12 text-white`}>
              {about[0].paragraphs.map((paragraph, index) => (
                <div key={index}>
                  {paragraph.text}
                  <a
                    href={paragraph.link.url}
                    target="_blank"
                    className="underline text-blue-400 hover:text-blue-500"
                  >
                    {paragraph.link.text}
                  </a>
                  {paragraph.additionalText}
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default About;
