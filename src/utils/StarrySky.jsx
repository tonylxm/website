import React, { useEffect, useState, useMemo } from "react";
import anime from "animejs";
import { isTouchDevice } from "./CustomCursor";

const StarrySky = () => {
  const [numStars] = useState(75);
  const [numShootingStars] = useState(75);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });

  const getRandomX = () => Math.floor(Math.random() * Math.floor(dimensions.vw)).toString();
  const getRandomY = () => Math.floor(Math.random() * Math.floor(dimensions.vh)).toString();

  const starryNight = () => {
    anime({
      targets: ".star",
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  const shootingStars = () => {
    anime({
      targets: ".wish",
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [{ value: "150px" }, { value: "0px" }],
      translateX: 350,
    });
  };

  const handleResize = () => {
    setDimensions({
      vw: window.innerWidth,
      vh: window.innerHeight,
    });
  };

  useEffect(() => {
    if (isTouchDevice()) return;
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    starryNight();
    shootingStars();
  }, []);

  const memoizedStarPositions = useMemo(
    () =>
      Array.from({ length: numStars }, (_, index) => ({
        x: getRandomX(),
        y: getRandomY(),
      })),
    [numStars, dimensions]
  );

  const memoizedShootingStarPositions = useMemo(
    () =>
      Array.from({ length: numShootingStars }, (_, index) => ({
        x: getRandomX(),
        y: getRandomY(),
      })),
    [numShootingStars, dimensions]
  );

  return (
    <div>
      <svg className="w-full h-screen">
        {memoizedStarPositions.map(({ x, y }, index) => (
          <circle
            key={index}
            className="star"
            cx={x}
            cy={y}
            r={Math.random() * 0.7 + 1}
            fill="white"
          />
        ))}
      </svg>
      <div
        className="absolute inset-0 w-full h-screen"
        style={{
          transform: "translateX(calc(50vw - 50%)) translateY(calc(50vh - 60%)) rotate(120deg)",
        }}
      >
        {memoizedShootingStarPositions.map(({ x, y }, index) => (
          <div
            key={index}
            className="wish absolute w-0 h-0.5"
            style={{
              left: `${y}px`,
              top: `${x}px`,
              background: "linear-gradient(-45deg, white, rgba(0, 0, 255, 0))",
              filter: "drop-shadow(0 0 6px white)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
