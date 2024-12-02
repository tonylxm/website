import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import profile from "../assets/profile.jpg";
import { LinkedInSvg, GitHubSvg } from "../assets/svg";
import resume from "../assets/Tony Lim Resume.pdf";
import Animation from "../utils/Animation";
import { titles } from "../data/about";
import TypewriterEffect from "../utils/TyperwriterEffect";
import { TYPING_SPEED } from "../utils/TypewriterSpeeds";
import { useSpring, animated } from "react-spring";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {}, [currentIndex]);

  useEffect(() => {
    const img = [...titles.map((title) => title.img), profile];
    cacheImages(img);
  }, []);

  const cacheImages = async (imgCacheArray) => {
    const promises = await imgCacheArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
  };

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

  return (
    <div className={`${styles.screen} z-0`}>
      <animated.div
        className={`${styles.aboutBackground} z-20`}
        style={{
          backgroundImage: `url(${
            titles[(currentIndex - 1 + titles.length) % titles.length].img
          })`,
          ...styles.backgroundImageStyle,
          ...fadeOut,
        }}
      />
      <animated.div
        className={`${styles.aboutBackground} z-10`}
        style={{
          backgroundImage: `url(${titles[currentIndex].img})`,
          ...styles.backgroundImageStyle,
        }}
      />
      <div className="flex-[0.85] md:flex-[0.65] lg:flex-[0.5] z-20 overflow-hidden">
        <Animation>
          <div className="flex justify-center">
            <img
              src={profile}
              className="rounded-full pointer-events-none h-44 xs:sm:h-52 md:xl:h-64"
            />
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
          <div
            className={`${styles.sectionText} text-tertiary flex mt-3 justify-center items-center`}
          >
            <LinkedInSvg />
            <GitHubSvg />
            &nbsp;
            <p className="ms-5 me-5">|</p>
            <a
              href={resume}
              target="_blank"
              className="hover:text-white hover:underline"
            >
              Resume
            </a>
          </div>
          <div className={`${styles.sectionText} text-left text-white mt-4`}>
            <p>
              I am passionate about solving problems that make a positive
              difference in people's lives. Currently, I am a Software Engineer
              Intern at{" "}
              <a
                href="https://www.sandfield.co.nz/"
                target="_blank"
                className="text-blue-400 hover:text-blue-500 hover:underline"
              >
                Sandfield
              </a>{" "}
              helping businesses get a competitive edge through tailored
              software solutions. I was previously a Software Development Intern
              at{" "}
              <a
                href="https://www.emergencyq.com/"
                target="_blank"
                className="text-blue-400 hover:text-blue-500 hover:underline"
              >
                Emergency Q
              </a>{" "}
              working on reducing wait times and overcrowding in hospital
              emergency departments.
            </p>
            <br />
            <p>
              In 2024, I was the President of the{" "}
              <a
                href="https://www.sesa.org.nz/"
                target="_blank"
                className="text-blue-400 hover:text-blue-500 hover:underline"
              >
                SESA
              </a>{" "}
              - the Software Engineering Students Association. I led an
              executive team of 17 to run social and career-focused events for
              550+ members, connecting them with each other as well as industry
              professionals. For 2025, I have stepped into the role of Industry
              Event Lead.
            </p>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default About;
