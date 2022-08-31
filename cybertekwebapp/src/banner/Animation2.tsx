import {
  animated,
  useSpringRef,
  useTransition,
  useSpring,
  config,
  useChain,
} from "@react-spring/web";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const data = [
  {
    name: "Rare Wind",
    //css: "url('./images/logo192.png')",
    delay: 1000,
  },
  {
    name: "Saint Petersburg",
    css: "url('./images/logo192.png')",
    delay: 2000,
  },
  {
    name: "Deep Blue",
    css: "url('./images/logo192.png')",
    delay: 3000,
  },
  {
    name: "Ripe Malinka",
    //css: "url('./images/logo192.png')",
    delay: 4000,
  },
  {
    name: "Perfect White",
    css: "url('./images/logo192.png')",
    delay: 1000,
  },
  {
    name: "Near Moon",
    css: "url('./images/logo192.png')",
    delay: 2000,
  },
  {
    name: "Wild Apple",
    css: "url('./images/logo192.png')",
    delay: 3000,
  },
  {
    name: "Ladoga Bottom",
    //css: "url('./images/logo192.png')",
    delay: 4000,
  },
  {
    name: "Sunny Morning",
    css: "url('./images/logo192.png')",
    delay: 1000,
  },
  {
    name: "Lemon Gate",
    css: "url('./images/logo192.png')",
    delay: 2000,
  },
  {
    name: "Salt Mountain",
    css: "url('./images/logo192.png')",
    delay: 3000,
  },
  {
    name: "New York",
    css: "url('./images/logo192.png')",
    delay: 4000,
  },
  {
    name: "Soft Grass",
    //css: "url('./images/logo192.png')",
    delay: 1000,
  },
  {
    name: "Japan Blush",
    css: "url('./images/logo192.png')",
    delay: 2000,
  },
];

export const Animation2 = () => {
  const [open, set] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(!open);
    }, 5000);
    return () => clearTimeout(timer);
  }, [open]);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "0%" },
    to: {
      size: open ? "100%" : "0%",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 1, scale: 0 },
    enter: (item) => async (next) => {
      await next({ opacity: 1, scale: 1, delay: item.delay });
    },
    leave: { opacity: 1, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            style={{
              ...style,
              color: "white",
              background: item.css,
              borderRadius: "50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {item.name}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};
