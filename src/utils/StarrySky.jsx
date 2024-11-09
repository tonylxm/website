import React, { useEffect, useState, useLayoutEffect, useMemo } from "react";
import anime from "animejs";
import { isTouchDevice } from "./CustomCursor";

const StarrySky = () => {
  const [numStars] = useState(75);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });

  const [shootingStarPosition, setShootingStarPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: 0.1,
  });

  const getRandomX = () => Math.floor(Math.random() * dimensions.vw).toString();
  const getRandomY = () => Math.floor(Math.random() * dimensions.vh).toString();

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

  useLayoutEffect(() => {
    starryNight();

    return () => {
      anime.remove(".star");
    };
  }, [dimensions]);

  const memoizedStarPositions = useMemo(
    () =>
      Array.from({ length: numStars }, () => ({
        x: getRandomX(),
        y: getRandomY(),
      })),
    [numStars, dimensions]
  );

  useEffect(() => {
    const updateShootingStarPosition = () => {
      setShootingStarPosition({
        x: Math.random() * dimensions.vw,
        y: Math.random() * dimensions.vh,
        delay: 1.5,
      });
    };

    const shootingStarInterval = setInterval(updateShootingStarPosition, 1500);

    return () => clearInterval(shootingStarInterval);
  }, [dimensions]);

  return (
    <div>
      {/* Stars */}
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

      {/* Shooting Stars */}
      <div
        className="absolute inset-0 w-full h-screen"
        style={{
          transform: "translateX(calc(50vw - 50%)) translateY(calc(50vh - 60%)) rotate(120deg)",
        }}
      >
        <div
          className="wish absolute w-0 h-0.5 transition-none"
          style={{
            left: `${shootingStarPosition.y}px`,
            top: `${shootingStarPosition.x}px`,
            animation: `shootingStar 1.5s linear ${shootingStarPosition.delay}s infinite`,
            background: "linear-gradient(-45deg, white, rgba(0, 0, 255, 0))",
            filter: "drop-shadow(0 0 6px white)",
          }}
        />
      </div>
    </div>
  );
};

export default StarrySky;
