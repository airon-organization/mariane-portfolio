import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Fixed = styled.div`
  position: fixed;
`;

const Wrapper = styled.div`
  width: 400px;
  border-right: 4px solid #000;
  height: calc(100vh - 80px);
  margin: 40px 0;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  display: flex;
  flex-direction: column;
`;

const Item = styled.div<{ active?: boolean }>`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? "#e397b1 !important" : "#fff")};

  &:hover {
    background-color: #f7d9e6;
    cursor: pointer;
  }
`;

interface Proptypes {
  onClick?: (id: string) => void;
  current?: string;
}
export default function MenuBar({ onClick, current }: Proptypes) {
  return (
    <Fixed>
      <Wrapper>
        <Container>
          <Typography
            variant="h3"
            sx={{ textDecorationLine: "underline", fontWeight: 900 }}
          ></Typography>
        </Container>

        <Container flex={2}>
          <Item onClick={() => onClick?.("home")} active={current === "home"}>
            <Typography variant="h4" fontWeight={700}>
              Home
            </Typography>
          </Item>
          <Item onClick={() => onClick?.("about")} active={current === "about"}>
            <Typography variant="h4" fontWeight={700}>
              Sobre
            </Typography>
          </Item>
          <Item
            onClick={() => onClick?.("services")}
            active={current === "services"}
          >
            <Typography variant="h4" fontWeight={700}>
              Serviços
            </Typography>
          </Item>
          <Item
            onClick={() => onClick?.("portfolio")}
            active={current === "portfolio"}
          >
            <Typography variant="h4" fontWeight={700}>
              Portfólio
            </Typography>
          </Item>
          <Item onClick={() => onClick?.("blog")} active={current === "blog"}>
            <Typography variant="h4" fontWeight={700}>
              Blog
            </Typography>
          </Item>
          <Item
            onClick={() => onClick?.("contact")}
            active={current === "contact"}
          >
            <Typography variant="h4" fontWeight={700}>
              Contato
            </Typography>
          </Item>
        </Container>
      </Wrapper>
    </Fixed>
  );
}

