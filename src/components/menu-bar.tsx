import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useState } from "react";

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Absolute = styled.div<{
  open?: boolean;
}>`
  position: absolute;
  top: -40px;
  transition: all 0.5s ease-in-out;
  left: ${({ open }) => (open ? "380px" : "1px")};
`;

const Wrapper = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? "400px" : "0px")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-right: 4px solid #000;
  height: calc(100vh - 80px);
  margin: 50px 0;
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
  background-color: ${({ active }) => (active ? "#FFEA00 !important" : "#fff")};

  &:hover {
    background-color: #ffea0055;
    cursor: pointer;
  }
`;

interface Proptypes {
  onClick?: (id: string) => void;
  current?: string;
  setMenuOpen?: () => void;
  open: boolean;
}
export default function MenuBar({
  open,
  onClick,
  current,
  setMenuOpen,
}: Proptypes) {
  return (
    <Fixed>
      <Relative>
        <Wrapper open={open}>
          <Container>
            <Typography
              variant="h3"
              sx={{ textDecorationLine: "underline", fontWeight: 900 }}
            ></Typography>
          </Container>

          <Container flex={2}>
            <Item onClick={() => onClick?.("home")} active={current === "home"}>
              <Typography variant="h5" fontWeight={700}>
                INÍCIO
              </Typography>
            </Item>
            <Item
              onClick={() => onClick?.("about")}
              active={current === "about"}
            >
              <Typography variant="h5" fontWeight={700}>
                SOBRE
              </Typography>
            </Item>
            <Item
              onClick={() => onClick?.("services")}
              active={current === "services"}
            >
              <Typography variant="h5" fontWeight={700}>
                SERVIÇOS
              </Typography>
            </Item>
            <Item
              onClick={() => onClick?.("portfolio")}
              active={current === "portfolio"}
            >
              <Typography variant="h5" fontWeight={700}>
                PORTFÓLIO
              </Typography>
            </Item>
            <Item onClick={() => onClick?.("blog")} active={current === "blog"}>
              <Typography variant="h5" fontWeight={700}>
                ARTIGOS
              </Typography>
            </Item>
            <Item
              onClick={() => onClick?.("contact")}
              active={current === "contact"}
            >
              <Typography variant="h5" fontWeight={700}>
                CONTATO
              </Typography>
            </Item>
          </Container>
        </Wrapper>

        {
          <Absolute open={open}>
            <IconButton
              sx={{
                color: "white",
                padding: "5px",
                backgroundColor: "black",
                borderRadius: "10px",
              }}
              onClick={() => setMenuOpen?.()}
            >
              {open && <ArrowBackSharpIcon />}
              {!open && <ArrowForwardSharpIcon />}
            </IconButton>
          </Absolute>
        }
      </Relative>
    </Fixed>
  );
}

