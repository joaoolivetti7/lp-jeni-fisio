import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo.tsx";
import SectionThree from "./components/SectionThree/SectionThree.tsx";
import SectionFive from "./components/SectionFive/SectionFive.tsx";
import Footer from "./components/Footer/Footer.tsx";
import SectionFour from "./components/SectionFour/SectionFour.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Footer />
  </StrictMode>
);
