import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import sendEmail from "../helpers/send-email";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #000000aa;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  min-width: 300px;

  &:hover {
    border: 1px solid #000000;
  }
`;
export default function Contact() {
  const [email, setEmail] = useState<{
    name: string;
    address: string;
    subject: string;
    message: string;
  }>({ name: "", address: "", subject: "", message: "" });
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = useCallback(async (e: any) => {
    e.preventDefault();

    sendEmail(form)?.then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Wrapper>
      <Typography variant="h2" textAlign={"center"} marginTop={10}>
        Contato
      </Typography>
      <Form onSubmit={onSubmit} ref={form}>
        <FormControl style={{ width: "100%" }} required>
          <InputLabel htmlFor="name" sx={{ fontSize: "20px" }}>
            Nome
          </InputLabel>
          <Input
            type="text"
            id="name"
            aria-describedby="my-helper-text"
            onChange={(e) => setEmail({ ...email, name: e.target.value ?? "" })}
            value={email?.name}
            placeholder="Digite seu nome"
            name="name"
          />
        </FormControl>

        <FormControl style={{ width: "100%" }} required>
          <InputLabel htmlFor="email" sx={{ fontSize: "20px" }}>
            Email
          </InputLabel>
          <Input
            type="email"
            id="email"
            aria-describedby="my-helper-text"
            onChange={({ target: { value } }) => {
              setEmail({ ...email, address: value ?? "" });
            }}
            value={email?.address}
            name="email"
          />
        </FormControl>

        <FormControl style={{ width: "100%" }} required>
          <InputLabel htmlFor="subject" sx={{ fontSize: "20px" }}>
            Assunto
          </InputLabel>
          <Input
            type="text"
            id="subject"
            aria-describedby="my-helper-text"
            onChange={(e) =>
              setEmail({ ...email, subject: e.target.value ?? "" })
            }
            name="subject"
            value={email?.subject}
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <TextareaAutosize
            id="message"
            aria-describedby="my-helper-text"
            onChange={(e) =>
              setEmail({ ...email, message: e.target.value ?? "" })
            }
            value={email?.message}
            minRows={4}
            name="message"
            placeholder="Digite sua mensagem"
          />
        </FormControl>

        <Input type="hidden" name="replyTo" value={email.address} />

        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </Form>
    </Wrapper>
  );
}

