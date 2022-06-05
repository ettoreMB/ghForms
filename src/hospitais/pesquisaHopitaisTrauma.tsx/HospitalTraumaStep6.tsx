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

export default function HospitalTraumaStep6() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step6");
  }

  return (
    <>
      <div className="w-max  pt-20 sm:p-2 m-auto sm:m-0 " >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">6. Quais produtos e marcas você usa atualmente para procedimentos de Trauma?</h2>
          <div className="mr-4">
            <span>Usar percentual de -/+ para indicar magnitude de crescimento e/ou diminuição</span>
          </div>
          <table className="border border-slate-400" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th className="w-32 border border-slate-300">PRODUTOS COMPRADOS (OU VENDIDOS)</th>
                <th className="w-20 border border-slate-300">selecionar os que sua instituição Compra</th>
                <th className="border border-slate-300">Marcas disponíveis para uso em sua instalação</th>
                <th className="border border-slate-300"> Marca preferida? Por que?</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <td className=" border border-slate-300">{product}</td>
                  <td className=" border border-slate-300">
                    <div className="justify-center  flex">
                      <input type="checkbox" {...register(`questao_6_${transformTitleToKeyName(product)}_1`)} />
                    </div>
                  </td>
                  <td className=" border border-slate-300"><textarea {...register(`questao_6_${transformTitleToKeyName(product)}_2`)} /></td>
                  <td className=" border border-slate-300"><textarea {...register(`questao_6_${transformTitleToKeyName(product)}_3`)} /></td>
                </tr>
              ))}


            </tbody>
          </table>
          <NextStepButton step={2} totalSteps={7} />
        </form>
      </div>
    </>
  )
}
