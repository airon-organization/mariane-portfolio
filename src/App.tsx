import styled from "@emotion/styled";
import MenuBar from "./components/menu-bar";
import Home from "./components/home";
import About from "./components/about";
import { useCallback, useRef } from "react";

const Root = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

const MenuContainer = styled.div`
  width: 420px;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleOnClick = useCallback(
    (id: string) => {
      switch (id) {
        case "home":
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "about":
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    },
    [homeRef]
  );
  return (
    <Root>
      <MenuContainer>
        <MenuBar onClick={handleOnClick} />
      </MenuContainer>
      <Main>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </Main>
    </Root>
  );
}

