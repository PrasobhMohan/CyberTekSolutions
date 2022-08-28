import { Header } from "header";
import { ScreenScopeProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";
import { TestBody } from "TestBody";

export const App = () => {
  return (
    <ScreenScopeProvider>
      <BrowserRouter>
        <Header />
        <main className="relative">
          {/* Main section here */}
          <TestBody />
        </main>
        <footer className="p-4 text-center">Footer</footer>
      </BrowserRouter>
    </ScreenScopeProvider>
  );
};
