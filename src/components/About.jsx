import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import profile from "../assets/profile.jpg";
import { LinkedInSvg, GitHubSvg } from "../assets/svg";
import resume from "../assets/Tony Lim Resume.pdf";
import Animation from "../utils/Animation";
import { titles, about } from "../constants/constants";
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

  const backgroundImageStyle = {
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

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
              className="hover:text-white underline"
            >
              Resume
            </a>
          </div>
          <div
            className={`${styles.sectionText} text-left text-white mt-4 sm:md:mt-6 lg:xl:mt-10`}
          >
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
                {paragraph.additional_text}
                <br />
                <br />
              </div>
            ))}
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default About;
