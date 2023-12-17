import styled from "@emotion/styled";
import { Typography } from "@mui/material";

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
`;
const PaddingCard = styled.div`
  padding: 70px;
  width: 100%;
  height: 100%;
`;
const BackgroundCard = styled.div`
  width: 140%;
  height: 80%;
  background-color: #e397b1;
  position: absolute;
  top: 50px;
  left: -20%;
  z-index: -1;
`;

const Line = styled.div`
  width: 60%;
  height: 5px;
  background-color: #000;
  margin: 30px 0;
`;

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <PaddingCard>
          <ImageCard>
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
            Mussum Ipsum, cacilds vidis litro abertis. Bota 1 metro de cachacis
            aí pra viagem!
          </Typography>
          <Typography variant="h3" fontFamily={"Fasthand"} marginTop={"30px"}>
            Mariane Alves Vidal
          </Typography>
        </PaddingCard>
      </Container>
    </Wrapper>
  );
}

