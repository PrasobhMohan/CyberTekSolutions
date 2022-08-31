import { animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

const videoOverlay = [
  { y: 100, x: 100, delay: 400, text: "Lorem Ipsum is simply dummy text" },
  { y: 50, x: 50, delay: 800, text: "Printing and typesetting industry" },
  { y: 0, x: 0, delay: 1200, text: "Lorem Printing and typesetting industry" },
];
export const Animation1 = () => {
  const [index, setIndex] = useState(0);
  const transition = useTransition(videoOverlay[index], {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, x: item.x, opacity: 1, delay: item.delay });
      await next({ x: 100 });
    },
    leave: { opacity: 0, y: 0, x: 0 },
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      let lastIndex = index;
      if (lastIndex === videoOverlay.length) {
        lastIndex = 0;
      }
      lastIndex++;
      setIndex(lastIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      {transition((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="absolute top-1/4 left-0.5 text-white font-bold  md:text-4xl text-xl"
          >
            {item.text}
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
