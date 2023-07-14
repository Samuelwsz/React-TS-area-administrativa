import "./App.css"
import Container from "./componentes/Container"
import Titulo from "./componentes/Titulo"
import Cabecalho from "./componentes/cabecalho"

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
    </>
  )
}

export default App
