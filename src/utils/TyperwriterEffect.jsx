import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ titles, onTextCompletionPercentageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [textCompletionPercentage, setTextCompletionPercentage] = useState(0);

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const WAIT_BEFORE_DELETE = 2000;

    const typeNextLetter = () => {
      if (index < titles[currentIndex].title.length) {
        index++;
        timeoutId = setTimeout(typeNextLetter, TYPING_SPEED);
        setDisplayedText((prevText) => {
          const newText = prevText + titles[currentIndex].title[index - 1];
          const completionPercentage = (newText.length / titles[currentIndex].title.length) * 100;
          setTextCompletionPercentage(completionPercentage);
          onTextCompletionPercentageChange(completionPercentage); // Notify the parent component
          return newText;
        });
      } else {
        timeoutId = setTimeout(deleteNextLetter, WAIT_BEFORE_DELETE);
      }
    };

    const deleteNextLetter = () => {
      setDisplayedText((prevText) => {
        const newText = prevText.slice(0, -1);
        const completionPercentage = (newText.length / titles[currentIndex].title.length) * 100;
        setTextCompletionPercentage(completionPercentage);
        onTextCompletionPercentageChange(completionPercentage);

        if (newText.length > 0) {
          timeoutId = setTimeout(deleteNextLetter, DELETING_SPEED);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
        return newText;
      });
    };

    typeNextLetter();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [titles, currentIndex]);

  return <p>{displayedText}</p>;
};

export default TypewriterEffect;
