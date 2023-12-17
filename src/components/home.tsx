import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import image from "../images/home-image.jpeg";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

const Container = styled.div`
  flex: 1;
  height: 100%;
`;
const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  border: 10px solid #000;
  position: relative;
  padding: 20px;
`;
const PaddingCard = styled.div<{ open?: boolean }>`
  padding: ${({ open }) => (open ? "110px 70px;" : "50px 100px")};
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;
const BackgroundCard = styled.div`
  width: 130%;
  height: 80%;
  background-color: #ffea00;
  position: absolute;
  top: 50px;
  left: -12%;
  z-index: -1;
`;

const Line = styled.div`
  width: 60%;
  height: 5px;
  background-color: #000;
  margin: 30px 0;
`;

export default function Home({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <Wrapper>
      <Container>
        <PaddingCard open={isMenuOpen}>
          <ImageCard>
            <img
              src={image}
              alt="home"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "all 0.5s ease-in-out",
              }}
              loading="lazy"
            />
            <BackgroundCard></BackgroundCard>
          </ImageCard>
        </PaddingCard>
      </Container>
      <Container>
        <PaddingCard>
          <Typography variant="h4" fontWeight={900} textAlign={"center"}>
            ENGENHEIRA DE CONTROLE E AUTOMAÇÃO
          </Typography>
          <Line />
          <Typography variant="h5" textAlign={"left"}>
            Experiência com eficiência energética, geração de energia
            fotovoltaica e qualidade dos materiais
          </Typography>
          <Typography variant="h3" fontFamily={"Fasthand"} marginTop={"30px"}>
            Mariane Vidal
          </Typography>
        </PaddingCard>
      </Container>
    </Wrapper>
  );
}

