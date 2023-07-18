import "./App.css"
import Container from "./componentes/Container"
import Titulo from "./componentes/Titulo"
import Rodape from "./componentes/Rodape"
import Tabela from "./componentes/Tabela"
import Grafico from "./componentes/Grafico"
import useDadosProfissional from "./utils/useDadosProfissional"
import useDadosConsulta from "./utils/useDadosConsulta"
import Avaliação from "./componentes/Avaliacao"
import Botao from "./componentes/Botao"
import Subtitulo from "./componentes/Subtitulo"
import Cabecalho from "./componentes/Cabecalho"

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta()
  const { dados: profissionais, erro: profissionaisErro } =
    useDadosProfissional()

  if (consultasErro || profissionaisErro) {
    console.log("Erro")
  }
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliação profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  )
}

export default App
