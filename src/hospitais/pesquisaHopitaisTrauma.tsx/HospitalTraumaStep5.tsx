import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";


const products = [
  'Placas para quadril ou pélvis',
  'Placas extremidades inferiores',
  'Placas extremidades superiores',
  'Parafusos para quadril ou pélvis',
  'Parafusos extremidades inferiores',
  'Parafusos extremidades superiores',
  'Pinos intramedulares umeral',
  'Pinos intramedulares acetabulares',
  'Pino intramedular femoral',
  'Pinos intramedulares tibiais',
  'Parafusos pequenos e cânulados',
  'Parafusos grandes e canulados',
  'Grandes Fixações Externas',
  'Fixações externas médias',
  'Pequenas Fixações Externas',
  'Mini Fixações Externas',
]

export default function HospitalTraumaStep5() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step6");
  }

  return (
    <>
      <div className="container">
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <h2>5.	Até que ponto você espera flutuações na compra dos seguintes produtos relacionados ao trauma:</h2>
          <div className="mr-4">
            <span>Usar percentual de -/+ para indicar magnitude de crescimento e/ou diminuição</span>
          </div>
          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1} className="w-32">PRODUTOS COMPRADOS (OU VENDIDOS)</th>
                <th rowSpan={3} colSpan={1} className="w-24 breal-normal">selecionar os que sua instituição Compra</th>
                <th colSpan={3} rowSpan={1} >Para produtos selecionados:</th>
              </tr>
              <tr>
                <th colSpan={1} rowSpan={3} className="w-60 break-normal" >qual é o crescimento /diminuição esperado nos próximos 1-5 anos (%)</th>
                <th colSpan={2} rowSpan={1} >O custo oscilou nos últimos 6 meses?</th>
              </tr>
              <tr>
                <th>Se sim, por quanto (%)?</th>
                <th>Se o custo flutuou, por quê?</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <td>{product}</td>
                  <td>
                    <div className="justify-center  flex">
                      <input type="checkbox" {...register(`questao_5_${transformTitleToKeyName(product)}_1`)} />
                    </div>
                  </td>
                  <td><textarea placeholder="Resposta"{...register(`questao_5_${transformTitleToKeyName(product)}_2`)} /></td>
                  <td><textarea placeholder="Resposta"{...register(`questao_5_${transformTitleToKeyName(product)}_3`)} /></td>
                  <td><textarea placeholder="Resposta"{...register(`questao_5_${transformTitleToKeyName(product)}_4`)} /></td>
                </tr>
              ))}

            </tbody>
          </table>
          <NextStepButton step={3} totalSteps={8} />
        </form>
      </div>
    </>
  )
}
