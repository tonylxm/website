import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { css3, react } from "../assets";

function Stack() {
  const scene = useRef();
  const engine = useRef(Matter.Engine.create());

  useEffect(() => {
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;

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

    // Adjusted dimensions and positions relative to container size
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

    const logoSize = 80;
    const reactLogo = Matter.Bodies.rectangle(
      cw / 2,
      ch / 2,
      logoSize,
      logoSize,
      {
        render: {
          sprite: {
            texture: react,
          },
        },
      }
    );

    const css3Logo = Matter.Bodies.rectangle(
      cw / 2,
      ch / 2,
      logoSize,
      logoSize,
      {
        render: {
          sprite: {
            texture: css3,
          },
        },
      }
    );

    // const tailwindLogo = Matter.Bodies.

    Matter.World.add(engine.current.world, [
      ground,
      ceiling,
      rightWall,
      leftWall,
      css3Logo,
      reactLogo,
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

  return <div className={`h-[560px]`} ref={scene} />;
}

export default Stack;
