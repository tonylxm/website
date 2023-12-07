import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const StarrySky = () => {
  const [numStars] = useState(60);
  const [numShootingStars] = useState(60);
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });

  const getRandomX = () => Math.floor(Math.random() * Math.floor(dimensions.vw)).toString();
  const getRandomY = () => Math.floor(Math.random() * Math.floor(dimensions.vh)).toString();

  const starryNight = () => {
    anime({
      targets: ".star",
      opacity: [{ duration: 700, value: "0" }, { duration: 700, value: "1" }],
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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    starryNight();
    shootingStars();
  }, [dimensions.vw, dimensions.vh]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <svg className="absolute inset-0" id="sky">
          {[...Array(numStars)].map((_, index) => (
            <circle
              key={index}
              className="star"
              cx={getRandomX()}
              cy={getRandomY()}
              r={Math.random() * 1.5 + 1}
              fill="white"
            />
          ))}
        </svg>
        <div
          id="shootingstars"
          className="absolute top-1/2 left-1/2 w-150vh h-100vw overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rotate-120"
        >
          {[...Array(numShootingStars)].map((_, index) => (
            <div
              key={index}
              className="wish absolute w-0 h-2 bg-white filter drop-shadow-md"
              style={{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarrySky;
