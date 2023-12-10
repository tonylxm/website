import React, { useState, useEffect } from "react";

const TypewriterTitle = ({ titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeNextLetter = () => {
      if (index < titles[currentIndex].length) {
        index++;
        timeoutId = setTimeout(typeNextLetter, 100); // Adjust speed if needed
        setDisplayedText(
          (prevText) => prevText + titles[currentIndex][index - 1]
        );
      } else {
        timeoutId = setTimeout(deleteNextLetter, 2000); // Adjust speed if needed
      }
    };

    const deleteNextLetter = () => {
      setDisplayedText((prevText) => {
        const newText = prevText.slice(0, -1);

        if (newText.length > 0) {
          timeoutId = setTimeout(deleteNextLetter, 50); // Adjust speed if needed
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
        return newText;
      });
    };

    typeNextLetter();

    return () => {
      clearTimeout(timeoutId);
      setDisplayedText("");
    };
  }, [titles, currentIndex]);

  return <p>{displayedText}</p>;
};

export default TypewriterTitle;
