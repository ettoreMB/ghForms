import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function Step9() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step10");
  }
  const produtos_tipos = [
    "Placas para quadril ou pélvis",
    "Placas extremidades inferiores",
    "Placas extremidades superiores",
    "Parafusos para quadril ou pélvis",
    "Parafusos extremidades inferiores",
    "Parafusos extremidades superiores",
    "Pinos intramedulares umeral",
    "Pinos intramedulares acetabulares",
    "Pino intramedular femoral",
    "Pinos intramedulares tibiais",
    "parafusos pequenos e cânulados",
    "Parafusos grandes e canulados",
    "Grande fixação externa",
    "Fixação externa média",
    "Pequena fixação externa",
    "Mini fixação externa",
  ]

  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">8 Principais características do produto para os  procedimentos de trauma mais frequentes realizados:</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>Produtos Utilizdos</th>
                <th colSpan={7}>ATRIBUTOS DE PRODUTO MAIS BEM AVALIADOS pelos hospitais (ordem de classificação de 1 a 7)</th>
              </tr>
              <tr>
                <th>Tipos</th>
                <th>marca usada em sua instalação</th>
                <th>Preço de compra</th>
                <th>Acessibilidade (Custo)</th>
                <th>Alto desempenho clínico</th>
                <th>Disponibilidade de produtos/inventário</th>
                <th>Suporte e treinamento por fabricante para uso</th>
                <th>Capacidade de usar produtos para outros tipos de procedimentos</th>
                <th>Percepção da marca como "premium"</th>
                <th>Outros (por favor, especifique)</th>
              </tr>
            </thead>
            <tbody>
              {produtos_tipos.map((product, index) => (
                <tr key={product}>
                  <td className="pl-2">{product}</td>
                  <td className="w-20 text-center"><input type="checkbox" /></td>
                  <td ><InputText placeholder="R$" type="number" /></td>
                  <td className="w-32"><InputText placeholder="1-7" type="number" /></td>
                  <td className="w-32"><InputText placeholder="1-7" type="number" /></td>
                  <td className="w-32"><InputText placeholder="1-7" type="number" /></td>
                  <td className="w-32"><InputText placeholder="1-7" type="number" /></td>
                  <td className="w-32"><InputText placeholder="1-7" type="number" /></td>
                  <td className="w-32"><InputText placeholder="1-7" type="number" /></td>
                  <td><textarea name="" id="" rows={1} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <NextStepButton />
        </form>
      </div >
    </>
  )
}
