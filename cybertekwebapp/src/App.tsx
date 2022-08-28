import { Header } from "header";
import { ScreenScopeProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";
import { TestBody } from "TestBody";
import { Banner1, Banner2, Banner3 } from "banner";

export const App = () => {
  return (
    <ScreenScopeProvider>
      <BrowserRouter>
        <Header />
        <main className="relative">
          <Banner3 />
          <div className="text-white w-full h-full overflow-auto">
            WHO WE ARE
            <div className="font-bold text-4xl">CYBERTEK SOLUTIONS</div>
            <TestBody />
          </div>
        </main>
        <footer className="p-4 text-center">Footer</footer>
      </BrowserRouter>
    </ScreenScopeProvider>
  );
};
