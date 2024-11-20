import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import sendEmail from "../helpers/send-email";
import CircularProgress from "@mui/material/CircularProgress";
import { usePushButton } from "../helpers/timer";

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

const Line = styled.div`
  width: 200px;
  height: 5px;
  background-color: #000;
  margin: 30px auto;
`;

const Resize = styled.span`
  resize: both;
  overflow: hidden;
  border-radius: 5px;
  z-index: 1;
  margin-top: 15px;
  transition: none;

  border: 1px solid #000000;
`;
export default function Contact() {
  const [email, setEmail] = useState<{
    name: string;
    address: string;
    subject: string;
    message: string;
  }>({ name: "", address: "", subject: "", message: "" });
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [completed, handleCompleted] = usePushButton(2000);

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (email.message.length < 3) {
        alert("Mensagem muito curta!");
        return;
      }
      setLoading(true);
      try {
        await sendEmail(form);
        handleCompleted();

        setEmail({ name: "", address: "", subject: "", message: "" });
      } catch (e) {
        alert("Erro ao enviar email!");
      }
      setLoading(false);
    },
    [email.message.length, handleCompleted]
  );
  return (
    <Wrapper>
      <Typography variant="h2" textAlign={"center"} marginTop={10}>
        Contato
      </Typography>
      <Line />
      {!completed && (
        <Form onSubmit={onSubmit} ref={form}>
          <FormControl style={{ width: "100%" }} required>
            <InputLabel htmlFor="name" sx={{ fontSize: "20px" }}>
              Nome
            </InputLabel>
            <Input
              type="text"
              id="name"
              inputProps={{ minLength: 3 }}
              aria-describedby="my-helper-text"
              onChange={(e) =>
                setEmail({ ...email, name: e.target.value ?? "" })
              }
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

          <FormControl sx={{ width: "100%" }} required>
            <InputLabel
              htmlFor="message"
              sx={{ fontSize: "20px", marginTop: "2px" }}
            >
              Mensagem
            </InputLabel>
            <Resize>
              <Input
                id="message"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setEmail({ ...email, message: e.target.value ?? "" })
                }
                value={email?.message}
                minRows={4}
                name="message"
                multiline
                style={{ height: "100%", width: "100%", padding: 0, margin: 0 }}
              />
            </Resize>
          </FormControl>

          <Button variant="contained" type="submit">
            {loading && <CircularProgress />}
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </Form>
      )}
      {completed && (
        <Typography variant="h2" textAlign={"center"} marginTop={10}>
          Email enviado com sucesso!
        </Typography>
      )}
    </Wrapper>
  );
}

