import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";

export default function Step5() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step6");
  }

  const questions = [
    {
      title: 'FX DE PUNHO',
    },
    {
      title: 'FX DE COTOVELO',


    },
    {
      title: 'FX UMERO',

    },
    {
      title: 'FX CLAVÍCULA',

    },
    {
      title: 'FX METACARPO',

    },
    {
      title: 'FX DE FALANGE',

    },
    {
      title: 'FX TROCANTERICA',

    },
    {
      title: 'FX DIAFISE FEMUR',
    },
    {
      title: 'FX FEMUR DISTAL',
    },
    {
      title: 'FX TIBIA PROXIMAL',
    },
    {
      title: 'FX DIAFISE TIBIAL',
    },
    {
      title: 'FX TIBIA DISTAL',
    },
    {
      title: 'FX METATARSO',
    },
    {
      title: 'OSTEOTOMIA QUADRIL',
    },
    {
      title: 'OSTEOTOMIA DE JOELHO',
    },
    {
      title: 'ARTRODESE FALANGE',
    },
    {
      title: 'ARTRODESE DE TORNOZELO',
    },
    {
      title: 'FX ACETABULO',
    },
    {
      title: 'ARTRODESE PUNHO',
    },
  ]


  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">6. Até que ponto você espera flutuações sobre os seguintes procedimentos:</h2>

          <table className="border border-slate-400" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1} className=" p-1 border border-slate-300">PRODUTOS VENDIDOS</th>
                <th rowSpan={3} colSpan={1} className="p-1 w-28 border border-slate-300">selecionar os que sua empresa vende</th>
                <th colSpan={3} rowSpan={1} className=" p-1 border border-slate-300">Para produtos selecionados</th>
              </tr>
              <tr>
                <th colSpan={1} rowSpan={3} className="p-1 border border-slate-300">qual é o crescimento /diminuição esperado nos próximos 1-5 anos (%)</th>
                <th colSpan={2} rowSpan={1} className=" p-1 border border-slate-300">O custo oscilou nos últimos 6 meses?</th>
              </tr>
              <tr>

                <th className="p-1 border border-slate-300">Se o custo flutuou, por quê?</th>
                <th className="p-1 border border-slate-300">Se sim, por quanto (%)?</th>
              </tr>
            </thead>
            <tbody>

              {questions.map((row, i) => (
                <tr key={row.title}>
                  <td className=" p-1 text-center border border-slate-300" >{row.title}</td>
                  <>
                    <td className="border border-slate-300">
                      <div className="justify-center w-full flex">
                        <input type="checkbox"  {...register(`questao_5_${transformTitleToKeyName(row.title)}_1`)} />
                      </div>
                    </td>
                    <td className="w-36"><InputText placeholder="1~100" min={1} max={100} type="number"{...register(`questao_6_${transformTitleToKeyName(row.title)}_2`)} /></td>
                    <td className="border border-slate-300"><textarea {...register(`questao_6_${transformTitleToKeyName(row.title)}_3`)} /></td>
                    <td className="border border-slate-300"><textarea {...register(`questao_6_${transformTitleToKeyName(row.title)}_3`)} /></td>
                  </>
                </tr>
              ))}

            </tbody>
          </table>
          <NextStepButton />
        </form>
      </div>
    </>
  )
}
