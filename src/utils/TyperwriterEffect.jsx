import React, { useState, useEffect } from "react";
import { TYPING_SPEED, DELETING_SPEED, WAIT_BEFORE_DELETE } from "./TypewriterSpeeds";

const TypewriterEffect = ({ titles, onTypingFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeNextLetter = () => {
      if (index < titles[currentIndex].title.length) {
        setDisplayedText((prevText) => {
          const newText = prevText + titles[currentIndex].title[index];
          index++;
          timeoutId = setTimeout(typeNextLetter, TYPING_SPEED);
          return newText;
        });
      } else {
        timeoutId = setTimeout(deleteNextLetter, WAIT_BEFORE_DELETE);
      }
    };

    const deleteNextLetter = () => {
      setDisplayedText((prevText) => {
        const newText = prevText.slice(0, -1);
        if (newText.length > 0) {
          timeoutId = setTimeout(deleteNextLetter, DELETING_SPEED);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
        return newText;
      });
    };

    typeNextLetter();
    onTypingFinish(currentIndex);

    return () => {
      clearTimeout(timeoutId);
      setDisplayedText("");
    };
  }, [titles, currentIndex]);

  return <p>{displayedText}</p>;
};

export default TypewriterEffect;
