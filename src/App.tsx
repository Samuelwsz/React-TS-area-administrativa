import "./App.css"
import Container from "./componentes/Container"
import Titulo from "./componentes/Titulo"
import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"
import Tabela from "./componentes/Tabela"
import Grafico from "./componentes/Grafico"

import useDadosProfissional from "./utils/useDadosProfissional"
import useDadosConsulta from "./utils/useDadosConsulta"
import Avaliação from "./componentes/Avaliacao"

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
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Avaliação profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  )
}

export default App
