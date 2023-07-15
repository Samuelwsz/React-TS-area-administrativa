import "./App.css"
import Container from "./componentes/Container"
import Titulo from "./componentes/Titulo"
import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Rodape />
    </>
  )
}

export default App
