import AnimatedCursor from "react-animated-cursor";

export function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function CustomCursor() {
  if (isTouchDevice()) return null;
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      outerAlpha={0}
      innerScale={1}
      outerScale={2}
      trailingSpeed={5}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "#d8dce3",
      }}
      outerStyle={{
        border: "3px solid #d8dce3",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default CustomCursor;
