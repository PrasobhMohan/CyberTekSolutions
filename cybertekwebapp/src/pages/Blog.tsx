import { Banner3 } from "banner";
import { TestBody } from "TestBody";

export const Blog = () => {
  return (
    <>
      <Banner3 />
      <div className="text-gray-50 w-full h-full overflow-auto px-8">
        WHO WE ARE
        <div className="font-bold text-4xl">CYBERTEK SOLUTIONS</div>
        <TestBody />
      </div>
    </>
  );
};
