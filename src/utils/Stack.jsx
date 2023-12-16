import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { styles } from "../styles";

function Stack() {
  const scene = useRef();
  const isPressed = useRef(false);
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
        // stiffness: 0.1,
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

    const logoSize = cw * 0.1; // 10% of container width
    const javaScriptLogo = Matter.Bodies.rectangle(
      cw / 2,
      ch / 2,
      logoSize,
      logoSize
    );
    const reactLogo = Matter.Bodies.rectangle(
      cw / 2,
      ch / 2,
      logoSize,
      logoSize
    );

    Matter.World.add(engine.current.world, [
      ground,
      ceiling,
      rightWall,
      leftWall,
      javaScriptLogo,
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

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  return (
    <div
    //   onMouseDown={handleDown}
    //   onMouseUp={handleUp}
    //   onMouseMove={handleAddCircle}
    >
      <div className={`${styles.card} h-[650px]`} ref={scene} />
    </div>
  );
}

export default Stack;
