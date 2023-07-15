import styled from "@emotion/styled"

import facebook from "./assets/facebook.png"
import google from "./assets/google.png"
import instagran from "./assets/instagram.png"
import whatsapp from "./assets/whatsapp.png"

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`
const ItemEstilizado = styled.li`
  list-style-type: none;
`

export default function Rodape() {
  return (
    <>
      <RodapeEstilizado>
        <ListaEstilizada>
          <ItemEstilizado>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </ItemEstilizado>
          <ItemEstilizado>
            <a href="#">
              <img src={google} alt="" />
            </a>
          </ItemEstilizado>
          <ItemEstilizado>
            <a href="#">
              <img src={whatsapp} alt="" />
            </a>
          </ItemEstilizado>
          <ItemEstilizado>
            <a href="#">
              <img src={instagran} alt="" />
            </a>
          </ItemEstilizado>
        </ListaEstilizada>
      </RodapeEstilizado>
    </>
  )
}
