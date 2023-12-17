import { useEffect, useRef } from "react";
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

  const cw = window.innerWidth * 0.7;
  const ch = 530;

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

  const thickness = 500;
  const ground = Matter.Bodies.rectangle(
    cw / 2,
    ch + thickness / 2,
    cw,
    thickness,
    {
      isStatic: true,
      render: {
        fillStyle: "secondary",
      },
    }
  );
  const ceiling = Matter.Bodies.rectangle(
    cw / 2,
    0 - thickness / 2,
    cw,
    thickness,
    {
      isStatic: true,
      render: {
        fillStyle: "secondary",
      },
    }
  );
  const rightWall = Matter.Bodies.rectangle(
    cw + thickness * 0.9998 / 2,
    ch / 2,
    thickness,
    ch,
    {
      isStatic: true,
      render: {
        fillStyle: "secondary",
      },
    }
  );
  const leftWall = Matter.Bodies.rectangle(
    0 - thickness / 2,
    ch / 2,
    thickness,
    ch,
    {
      isStatic: true,
      render: {
        fillStyle: "secondary",
      },
    }
  );

  useEffect(() => {
    const render = Matter.Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
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

    const pyramidWidth = gridSizeX * logoSize;
    const stack = Matter.Composites.pyramid(
      cw / 2 - pyramidWidth / 2,
      ch / 2,
      gridSizeX,
      gridSizeY,
      0,
      0,
      function (x, y) {
        const tech = techStack[techIndex];
        techIndex = (techIndex + 1) % techStack.length;

        return Matter.Bodies.rectangle(
          x,
          y - thickness / 2,
          logoSize,
          logoSize,
          {
            render: {
              sprite: {
                texture: tech,
              },
            },
            label: "tech",
            friction: 1,
            frictionAir: 0.001,
            restitution: 0.1,
          }
        );
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

  return <div className={`h-[530px]`} ref={scene} />;
};

export default Stack;
