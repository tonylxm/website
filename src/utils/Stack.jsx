import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  html5,
  css3,
  javascript,
  typescript,
  react,
  angular,
  tailwind,
  java,
  python,
} from "../assets";

const Stack = () => {
  const scene = useRef();
  const engine = useRef(Matter.Engine.create());
  const [dimensions, setDimensions] = useState({
    cw: window.innerWidth / 1.225,
    ch: window.innerHeight / 1.3,
  });

  const logoSize = 80;
  const gridSizeX = 5;
  const gridSizeY = 5;

  let techIndex = 0;

  // Order by proficiency as this is the order they appear in the stack
  const techStack = [
    java,
    javascript,
    python,
    typescript,
    react,
    angular,
    html5,
    css3,
    tailwind,
  ];

  const ground = Matter.Bodies.rectangle(dimensions.cw / 2, dimensions.ch + 220, dimensions.cw, 500, {
    isStatic: true,
  });
  const ceiling = Matter.Bodies.rectangle(dimensions.cw / 2, -250, dimensions.cw, 500, {
    isStatic: true,
  });
  const rightWall = Matter.Bodies.rectangle(dimensions.cw + 250, dimensions.ch / 2, 500, dimensions.ch, {
    isStatic: true,
  });
  const leftWall = Matter.Bodies.rectangle(-250, dimensions.ch / 2, 500, dimensions.ch, {
    isStatic: true,
  });

  const handleResize = () => {
    // const newDimensions = {
    //   cw: window.innerWidth / 1.225,
    //   ch: window.innerHeight / 1.3,
    // };
  
    // setDimensions(newDimensions);
  
    // // Update stack
    // Matter.Composite.allBodies(engine.current.world).forEach((body, index) => {
    //   if (index >= 4) {
    //     const stackX = newDimensions.cw / 3;
    //     const stackY = newDimensions.ch / 2;
    //     const tech = techStack[index - 4];
    //     Matter.Body.setPosition(body, { x: stackX, y: stackY - 250 });
    //     Matter.Body.setVertices(body, Matter.Vertices.fromPath(`0 0 ${logoSize} 0 ${logoSize} ${logoSize} 0 ${logoSize}`));
    //     Matter.Body.setTexture(body, tech);
    //   }
    // });
  
    // Matter.Render.setPixelRatio(render, window.devicePixelRatio);
    // Matter.Render.canvasSize(render, newDimensions.cw, newDimensions.ch);
  
    // Matter.Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: newDimensions.cw, y: newDimensions.ch },
    // });
  };  
  

  useEffect(() => {
    const render = Matter.Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: dimensions.cw,
        height: dimensions.ch - 30,
        wireframes: false,
        background: "transparent",
      },
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });

    Matter.World.add(engine.current.world, mouseConstraint);

    const stack = Matter.Composites.pyramid(
      dimensions.cw / 3,
      dimensions.ch / 2,
      gridSizeX,
      gridSizeY,
      0,
      0,
      function (x, y) {
        const tech = techStack[techIndex];
        techIndex = (techIndex + 1) % techStack.length;

        return Matter.Bodies.rectangle(x, y - 250, logoSize, logoSize, {
          render: {
            sprite: {
              texture: tech,
            },
          },
          friction: 1,
          frictionAir: 0.001,
          restitution: 0.1,
        })
      }
    );

    Matter.World.add(engine.current.world, [
      ground,
      ceiling,
      rightWall,
      leftWall,
      stack,
    ]);

    Matter.Runner.run(engine.current);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.current.world);
      Matter.Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className={`h-[560px]`} ref={scene} />;
};

export default Stack;
