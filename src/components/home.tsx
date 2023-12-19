import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import image from "../images/home-image.jpeg";

const Wrapper = styled.div<{ open?: boolean }>`
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;

  @media (max-width: 1270px) {
    flex-direction: ${({ open }) => (open ? "column" : "row")};
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }
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
  min-width: 250px;
`;
const PaddingCard = styled.div<{ open?: boolean }>`
  padding: ${({ open }) => (open ? "110px 70px;" : "50px 120px")};
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1270px) {
    padding: ${({ open }) => (open ? "100px 120px;" : "50px 80px")};
  }

  @media (max-width: 840px) {
    padding: 50px 120px;
  }

  @media (max-width: 530px) {
    padding: 50px 60px;
  }
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
    <Wrapper open={isMenuOpen}>
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
                maxHeight: "400px",
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
          <Typography
            variant="h3"
            textAlign={"center"}
            fontFamily={"Fasthand"}
            marginTop={"30px"}
          >
            Mariane Vidal
          </Typography>
        </PaddingCard>
      </Container>
    </Wrapper>
  );
}

