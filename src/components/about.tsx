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
  width: 250px;
  height: 100px;
  border: 5px solid #ffea00;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
`;
export default function About() {
  return (
    <Wrapper>
      <Typography variant="h2" textAlign={"center"} marginTop={10}>
        Sobre
      </Typography>
      <Line />
      <Typography variant="h5" textAlign={"justify"} marginX={10} marginTop={5}>
        Sou formada em Engenharia de Controle e Automação pelo Instituto Federal
        de Goiás ao qual concluí em 2020, durante minha graduação participei de
        Iniciação Científica desenvolvendo um software em Matlab para calcular a
        quantificação de emissões de CO<sub>2</sub> que deixariam de ser
        emitidas com implementação de eficiência energética e geração
        fotovoltaica no IFG.
      </Typography>
      <Typography variant="h5" textAlign={"justify"} marginX={10} marginTop={5}>
        O trabalho de conclusão do curso foi o desenvolvimento de um software
        que me levou ao registro do programa de Software no INPI – Instituto
        Nacional de Propriedade Industrial. O EcoViability 1 faz o Cálculo da
        Viabilidade Econômica de projetos de eficiência energética de lâmpadas e
        equipamentos e implementação de sistema de geração fotovoltaica
        conectada à rede, assim como o cálculo das emissões de gases do efeito
        estufa que serão reduzidas com a Implantação dessas ações de Eficiência
        Energética e de Minigeração Fotovoltaica.
      </Typography>

      <Typography variant="h5" textAlign={"justify"} marginX={10} marginTop={5}>
        Trabalho desde 2019 na área de Qualidade dos Materiais para
        Distribuidoras de Energia elétrica, colaborando com inspeções em
        fábricas para materiais que serão empregados na rede elétrica. Tenho
        familiaridade com especificações técnicas e relatórios técnicos de
        ensaios de materiais. Atualmente sou Analista Administrativa ao qual
        colaboro para garantir a qualidade da rede elétrica em vários Estados do
        Brasil.
      </Typography>

      <Typography
        variant="h5"
        fontWeight={"800"}
        textAlign={"justify"}
        marginX={10}
        marginTop={5}
      >
        Meu objetivo profissional é trabalhar na área de geração de energia
        elétrica renovável e medidas tecnológicas sustentáveis para que seja
        possível um futuro melhor e seguro.
      </Typography>

      <Squares>
        <Square>
          <Typography variant="h4">3 artigos</Typography>
          <Typography variant="h6">Publicados</Typography>
        </Square>
        <Square>
          <Typography variant="h4">1 software</Typography>
          <Typography variant="h6">Registrado</Typography>
        </Square>
        <Square>
          <Typography variant="h4">+3 anos</Typography>
          <Typography variant="h6">Qualidade dos materiais</Typography>
        </Square>
        <Square>
          <Typography variant="h4"></Typography>
          <Typography variant="h6">Trabalho remoto</Typography>
        </Square>
        <Square>
          <Typography variant="h4">100%</Typography>
          <Typography variant="h6">Clientes satisfeitos</Typography>
        </Square>
        <Square>
          <Typography variant="h4">Zero</Typography>
          <Typography variant="h6">Xícaras de café</Typography>
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

