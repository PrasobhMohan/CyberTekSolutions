import { Banner1 } from "banner";
import { TestBody } from "TestBody";
import homeVideo from "../static/media/videos/home.mp4";

//const config = { mass: 50, tension: 200, friction: 200 };

export const Home = () => {
  // const [item, setItem] = React.useState({
  //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   toggle: true,
  // });

  // const trail = useTrail(1, {
  //   config,
  //   opacity: item.toggle ? 1 : 0,
  //   x: item.toggle ? 0 : 20,
  //   height: item.toggle ? 80 : 0,
  //   from: { opacity: 0, x: 20, height: 0 },
  // });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setItem({
  //       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //       toggle: !item.toggle,
  //     });
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [item.toggle]);

  // const imageAnimation = (
  //   <div>
  //     {trail.map(({ x, height, ...rest }, index) => (
  //       <animated.div
  //         key={item.text}
  //         className="absolute top-1/4 left-0.5 text-white font-bold  md:text-6xl text-xl"
  //         style={{
  //           ...rest,
  //           transform: x.to((x) => `translate3d(0,${x}px,0)`),
  //         }}
  //       >
  //         <animated.div style={{ height }}>{item.text}</animated.div>
  //       </animated.div>
  //     ))}
  //   </div>
  // );

  return (
    <>
      {/* <Banner1>{imageAnimation}</Banner1> */}
      <Banner1 src={homeVideo} />
      <div className="w-full h-full overflow-auto">
        WHO WE ARE
        <div className="font-bold text-4xl">CYBERTEK SOLUTIONS</div>
        <TestBody />
      </div>
    </>
  );
};
