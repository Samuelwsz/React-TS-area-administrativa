import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts"
import IProfissional from "../../types/IProfissional"
import IConsulta from "../../types/IConsulta"
import useDadosGraficos from "./useDadosGrafico"
import { IDados } from "../../types/IDados"
import styled from "@emotion/styled"

interface GraficoProps {
  profissionais: IProfissional[] | null
  consultas: IConsulta[] | null
}

const SecaoEstilizada = styled.section`
  background-color: var(--branco);
  border-radius: 16px;
`

export default function Grafico({ profissionais, consultas }: GraficoProps) {
  let dados: Array<IDados> = useDadosGraficos({ profissionais, consultas })

  return (
    <>
      <SecaoEstilizada>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            layout="vertical"
            data={dados}
            margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
          >
            <XAxis type="number"></XAxis>
            <YAxis type="category" dataKey="nome"></YAxis>
            <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </SecaoEstilizada>
    </>
  )
}
