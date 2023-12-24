import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import curriculo from "../files/curriculo.pdf";
import downloadFile from "../helpers/export";
import DownloadIcon from "@mui/icons-material/Download";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  justify-content: center;
`;
const Line = styled.div`
  width: 200px;
  height: 5px;
  background-color: #000;
  margin: 30px auto;
`;

const Squares = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

const Square = styled.div`
  width: 200px;
  height: 100px;
  border: 5px solid #000;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function About() {
  return (
    <Wrapper>
      <Typography variant="h2" textAlign={"center"} marginTop={10}>
        Biografia
      </Typography>
      <Line />
      <Typography variant="h5" textAlign={"center"} marginX={10} marginTop={5}>
        I'm a Freelancer Front-end Developer with over 12 years of experience.
        I'm from London, UK. I code and create web elements for amazing people
        around the world. I like work with new people. New people are new
        experiences.
      </Typography>
      <Squares>
        <Square>
          <Typography variant="h4">12</Typography>
          <Typography variant="h6">Years of experience</Typography>
        </Square>
        <Square>
          <Typography variant="h4">20</Typography>
          <Typography variant="h6">Projects completed</Typography>
        </Square>
        <Square>
          <Typography variant="h4">100</Typography>
          <Typography variant="h6">Happy clients</Typography>
        </Square>
        <Square>
          <Typography variant="h4">50</Typography>
          <Typography variant="h6">Cups of coffee</Typography>
        </Square>
      </Squares>
      <Button
        variant="contained"
        onClick={() => downloadFile(curriculo, "Mariane Vidal")}
        style={{
          width: "200px",
          margin: "50px auto",
          padding: 0,
          height: "200px",
          fontSize: "20px",
          backgroundColor: "#ffea00",
          color: "#000",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DownloadIcon style={{ fontSize: "50px", margin: "0 50px" }} />
        Download CV
      </Button>
    </Wrapper>
  );
}

