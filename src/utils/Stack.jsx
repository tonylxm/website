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

const Stack = ({ resetCounter }) => {
  const scene = useRef();
  const engine = useRef(Matter.Engine.create());

  useEffect(() => {
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;

    const resetTechStack = () => {
      Matter.Composite.allBodies(engine.current.world).forEach((body) => {
        Matter.Composite.remove(engine.current.world, body);
      });

      const stack = Matter.Composites.pyramid(
        cw / 4,
        ch / 2,
        gridSizeX,
        gridSizeY,
        0,
        0,
        function (x, y) {
          const tech = techStack[techIndex];
          setTechIndex((prevIndex) => (prevIndex + 1) % techStack.length);

          return Matter.Bodies.rectangle(x, y - 500, logoSize, logoSize, {
            render: {
              sprite: {
                texture: tech,
              },
            },
          });
        }
      );
      
      Matter.World.add(engine.current.world, stack);
    };

    const render = Matter.Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch - 30,
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

    const ground = Matter.Bodies.rectangle(cw / 2, ch + 220, cw, 500, {
      isStatic: true,
    });
    const ceiling = Matter.Bodies.rectangle(cw / 2, -250, cw, 500, {
      isStatic: true,
    });
    const rightWall = Matter.Bodies.rectangle(cw + 250, ch / 2, 500, ch, {
      isStatic: true,
    });
    const leftWall = Matter.Bodies.rectangle(-250, ch / 2, 500, ch, {
      isStatic: true,
    });

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

    const logoSize = 80;
    const gridSizeX = 5;
    const gridSizeY = 5;

    let techIndex = 0;

    const stack = Matter.Composites.pyramid(
      cw / 4,
      ch / 2,
      gridSizeX,
      gridSizeY,
      0,
      0,
      function (x, y) {
        const tech = techStack[techIndex];
        techIndex = (techIndex + 1) % techStack.length;

        return Matter.Bodies.rectangle(x, y - 500, logoSize, logoSize, {
          render: {
            sprite: {
              texture: tech,
            },
          },
        });
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

    document.addEventListener("resetTechStack", resetTechStack);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.current.world);
      Matter.Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      document.removeEventListener("resetTechStack", resetTechStack);
    };
  }, [resetCounter]);

  return <div className={`h-[560px]`} ref={scene} />;
};

export default Stack;
