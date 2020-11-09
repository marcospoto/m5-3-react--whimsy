import { useSpring, animated } from "react-spring";
import React from "react";

export const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 200,
      friction: 10,
    },
  });
  return <animated.div style={style}>{children}</animated.div>;
};
