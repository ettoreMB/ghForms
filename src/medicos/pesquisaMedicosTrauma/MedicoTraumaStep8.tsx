import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";

export default function Step8() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step9");
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
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>10. Principais características do produto para os  procedimentos de trauma mais frequentes realizados:</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>Produtos Utilizdos</th>
                <th colSpan={7}>ATRIBUTOS DE PRODUTO MAIS BEM AVALIADOS pelos hospitais (ordem de classificação de 1 a 7)</th>
              </tr>
              <tr>
                <th className="text-center">Tipos</th>
                <th className="break-normal">marca usada em sua instalação</th>
                <th className="w-40">Preço de compra</th>
                <th className="w-32">Acessibilidade (Custo)</th>
                <th className="w-32">Alto desempenho clínico</th>
                <th className="w-36">Disponibilidade de produtos/inventário</th>
                <th className="w-32">Suporte e treinamento por fabricante para uso</th>
                <th className="w-32">Capacidade de usar produtos para outros tipos de procedimentos</th>
                <th className="w-32">Percepção da marca como "premium"</th>
                <th className="w-44 break-normal">Outros (por favor, especifique)</th>
              </tr>
            </thead>
            <tbody>
              {produtos_tipos.map((product, index) => (
                <tr key={product}>
                  <td className="pl-2">{product}</td>
                  <td className="w-20 text-center"><input type="checkbox" {...register(`questao_10_${transformTitleToKeyName(product)}_1`)} /></td>
                  <td ><InputText placeholder="R$" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_2`)} /></td>
                  <td className=""><InputText placeholder="1-7" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_3`)} /></td>
                  <td className=""><InputText placeholder="1-7" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_4`)} /></td>
                  <td className=""><InputText placeholder="1-7" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_5`)} /></td>
                  <td className=""><InputText placeholder="1-7" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_6`)} /></td>
                  <td className=""><InputText placeholder="1-7" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_7`)} /></td>
                  <td className=""><InputText placeholder="1-7" type="number" {...register(`questao_10_${transformTitleToKeyName(product)}_8`)} /></td>
                  <td><textarea rows={1} {...register(`questao_10_${transformTitleToKeyName(product)}_9`)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <NextStepButton step={6} totalSteps={8} />
        </form>
      </div >
    </>
  )
}
