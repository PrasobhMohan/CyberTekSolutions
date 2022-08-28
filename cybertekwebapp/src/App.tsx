import { Header } from "header";
import { ScreenScopeProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <ScreenScopeProvider>
      <BrowserRouter>
        <Header />
        {/* Main section here */}
      </BrowserRouter>
    </ScreenScopeProvider>
  );
};
