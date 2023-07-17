import styled from "@emotion/styled"
import IProfissional from "../../types/IProfissional"
import Card from "./Card"

const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

export default function Avaliação({
  profissionais,
}: {
  profissionais: IProfissional[] | null
}) {
  return (
    <>
      <SecaoCard>
        {profissionais?.map((profissional) => {
          return <Card profissional={profissional} />
        })}
      </SecaoCard>
    </>
  )
}
