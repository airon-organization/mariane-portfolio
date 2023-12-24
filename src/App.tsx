import styled from "@emotion/styled";
import MenuBar from "./components/menu-bar";
import Home from "./components/home";
import About from "./components/about";
import { useCallback, useRef, useState } from "react";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import useIntersectionObserver from "./hooks/intersection-observer";

const Root = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

const MenuContainer = styled.div<{ menuOpen: boolean }>`
  width: ${({ menuOpen }) => (menuOpen ? "420px" : "0px")};
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  width: 80%;
  height: 5px;
  background-color: #000;
  margin: 30px 0;
`;
export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const [currentSection, setCurrentSection] = useState<string>("home");

  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  useIntersectionObserver(homeRef, () => setCurrentSection("home"));
  useIntersectionObserver(aboutRef, () => setCurrentSection("about"));
  useIntersectionObserver(contactRef, () => setCurrentSection("contact"));
  useIntersectionObserver(blogRef, () => setCurrentSection("blog"));
  useIntersectionObserver(servicesRef, () => setCurrentSection("services"));
  useIntersectionObserver(portfolioRef, () => setCurrentSection("portfolio"));

  const handleOnClick = useCallback(
    (id: string) => {
      switch (id) {
        case "home":
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "about":
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "contact":
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "blog":
          blogRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "services":
          servicesRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "portfolio":
          portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    },
    [homeRef]
  );
  return (
    <Root>
      <MenuContainer menuOpen={menuOpen}>
        <MenuBar
          open={menuOpen}
          onClick={handleOnClick}
          current={currentSection}
          setMenuOpen={() => setMenuOpen(!menuOpen)}
        />
      </MenuContainer>
      <Main>
        <div ref={homeRef} id="home">
          <Home isMenuOpen={menuOpen} />
        </div>
        <Line />
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <Line />
        <div ref={servicesRef} id="services">
          <Services />
        </div>
        <Line />
        <div ref={portfolioRef} id="portfolio">
          <Portfolio />
        </div>
        <Line />
        <div ref={blogRef} id="blog">
          <Blog />
        </div>
        <Line />
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </Main>
    </Root>
  );
}

