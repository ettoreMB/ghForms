import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";
import { getDataFromStorage } from "../../utils/getDataFromStorage";

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
  const { actions } = useStateMachine({ updateAction });

  const values = getDataFromStorage();

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step7");
  }

  return (
    <>
      <div className="container" >
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <h2>6. Quais produtos e marcas você usa atualmente para procedimentos de Trauma?</h2>
          <div className="mr-4">
            <span>Usar percentual de -/+ para indicar magnitude de crescimento e/ou diminuição</span>
          </div>
          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th className="w-32">PRODUTOS COMPRADOS (OU VENDIDOS)</th>
                <th className="w-24 break-all">selecionar os que sua instituição Compra</th>
                <th >Marcas disponíveis para uso em sua instalação</th>
                <th> Marca preferida? Por que?</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <td>{product}</td>
                  <td>
                    <div className="justify-center  flex">
                      <input type="checkbox" defaultChecked={values?.data[`questao_6_${transformTitleToKeyName(product)}_1`]} {...register(`questao_6_${transformTitleToKeyName(product)}_1`)} />
                    </div>
                  </td>
                  <td><textarea placeholder="Resposta" defaultValue={values?.data[`questao_6_${transformTitleToKeyName(product)}_2`]}{...register(`questao_6_${transformTitleToKeyName(product)}_2`)} /></td>
                  <td><textarea placeholder="Resposta" defaultValue={values?.data[`questao_6_${transformTitleToKeyName(product)}_3`]}{...register(`questao_6_${transformTitleToKeyName(product)}_3`)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <NextStepButton step={4} totalSteps={8} />
        </form>
      </div>
    </>
  )
}
