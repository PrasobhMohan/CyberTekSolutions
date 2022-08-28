import { Banner3 } from "banner";
import { TestBody } from "TestBody";

export const Home = () => {
  return (
    <>
      <Banner3 />
      <div className="text-white w-full h-full overflow-auto">
        WHO WE ARE
        <div className="font-bold text-4xl">CYBERTEK SOLUTIONS</div>
        <TestBody />
      </div>
    </>
  );
};
