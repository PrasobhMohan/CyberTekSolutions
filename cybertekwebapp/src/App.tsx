import { Header } from "header";
import { ScreenScopeProvider } from "contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Experience } from "pages/Experience";
import { Blog } from "pages/Blog";
import { Partners } from "pages/Partners";
import { ContactUs } from "pages/ContactUs";
import { Networking } from "pages/Networking";
import { Security } from "pages/Security";
import { Wireless } from "pages/Wireless";
import { FiveG } from "pages/FiveG";
import { CloudComputing } from "pages/CloudComputing";
import { SDWan } from "pages/SDWan";
import { IoT } from "pages/IoT";

export const App = () => {
  return (
    <ScreenScopeProvider>
      <BrowserRouter>
        <Header />
        <main className="relative p-4 font-bold text-lg">
          <Routes>
            <Route path="/">
              <Route path="services">
                <Route path="networking" element={<Networking />} />
                <Route path="security" element={<Security />} />
                <Route path="wireless" element={<Wireless />} />
                <Route path="5g" element={<FiveG />} />
                <Route path="sd-wan" element={<SDWan />} />
                <Route path="cloud-computing" element={<CloudComputing />} />
                <Route path="iot" element={<IoT />} />
              </Route>
              <Route path="experience" element={<Experience />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="partners" element={<Partners />} />
              <Route index={true} element={<Home />} />
            </Route>
          </Routes>
        </main>
        <footer className="p-4 text-center">Footer</footer>
      </BrowserRouter>
    </ScreenScopeProvider>
  );
};
