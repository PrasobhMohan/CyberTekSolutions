import { Animation1, Animation2, Banner1 } from "banner";
import { TestBody } from "TestBody";

export const Home = () => {
  return (
    <>
      <Banner1>
        <Animation2 />
        <Animation1 />
      </Banner1>

      <div className="w-full h-full overflow-auto">
        WHO WE ARE
        <div className="font-bold text-4xl">CYBERTEK SOLUTIONS</div>
        <TestBody />
      </div>
    </>
  );
};
