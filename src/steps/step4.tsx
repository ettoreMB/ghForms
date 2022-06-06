import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";

import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export function Step4() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step5");
  }

  const questions = [
    {
      title: 'Placas para quadril ou pélvis',
      options: {
        q1: 'questao_2_PlacasParaQuadrilPelvis_1',
        q2: 'questao_2_PlacasParaQuadrilPelvis_2',
        q3: 'questao_2_PlacasParaQuadrilPelvis_3',
        q4: 'questao_2_PlacasParaQuadrilPelvis_4',
      }
    },
    {
      title: 'Placas extremidades inferiores',
      options: {
        q1: 'questao_2_PlacasExtremidadesInferiores_1',
        q2: 'questao_2_PlacasExtremidadesInferiores_2',
        q3: 'questao_2_PlacasExtremidadesInferiores_3',
        q4: 'questao_2_PlacasExtremidadesInferiores_4',
      }
    },
    {
      title: 'Placas extremidades superiores',
      options: {
        q1: 'questao_2_PlacasExtremidadesSuperiores_1',
        q2: 'questao_2_PlacasExtremidadesSuperiores_2',
        q3: 'questao_2_PlacasExtremidadesSuperiores_3',
        q4: 'questao_2_PlacasExtremidadesSuperiores_4',
      }
    },
    {
      title: 'Parafusos para quadril ou pélvis',
      options: {
        q1: 'questao_2_ParafusosQuadrilPelvis_1',
        q2: 'questao_2_ParafusosQuadrilPelvis_2',
        q3: 'questao_2_ParafusosQuadrilPelvis_3',
        q4: 'questao_2_ParafusosQuadrilPelvis_4'
      }
    },
    {
      title: 'Parafusos extremidades inferiores',
      options: {
        q1: 'questao_2_ParafusosExtremidadesInferiores_1',
        q2: 'questao_2_ParafusosExtremidadesInferiores_2',
        q3: 'questao_2_ParafusosExtremidadesInferiores_3',
        q4: 'questao_2_ParafusosExtremidadesInferiores_4',
      }
    },
    {
      title: 'Parafusos extremidades superiores',
      options: {
        q1: 'questao_2_ParafusosExtremidadesSuperiores_1',
        q2: 'questao_2_ParafusosExtremidadesSuperiores_2',
        q3: 'questao_2_ParafusosExtremidadesSuperiores_3',
        q4: 'questao_2_ParafusosExtremidadesSuperiores_4',
      }
    },
    {
      title: 'Pinos intramedulares umeral',
      options: {
        q1: 'questao_2_PinosIntramedularesUmeral_1',
        q2: 'questao_2_PinosIntramedularesUmeral_2',
        q3: 'questao_2_PinosIntramedularesUmeral_3',
        q4: 'questao_2_PinosIntramedularesUmeral_4',
      }
    },
    {
      title: 'Pinos intramedulares acetabulares',
      options: {
        q1: 'questao_2_PinosIntramedularesAcetabulares_1',
        q2: 'questao_2_PinosIntramedularesAcetabulares_2',
        q3: 'questao_2_PinosIntramedularesAcetabulares_3',
        q4: 'questao_2_PinosIntramedularesAcetabulares_4'
      }
    },
    {
      title: 'Pino intramedular femoral',
      options: {
        q1: 'questao_2_PinoIntramedularFemoral_1',
        q2: 'questao_2_PinoIntramedularFemoral_2',
        q3: 'questao_2_PinoIntramedularFemoral_3',
        q4: 'questao_2_PinoIntramedularFemoral_4',
      }
    },
    {
      title: 'Pinos intramedulares tibiais',
      options: {
        q1: 'questao_2_PinosIntramedularesTibiais_1',
        q2: 'questao_2_PinosIntramedularesTibiais_2',
        q3: 'questao_2_PinosIntramedularesTibiais_3',
        q4: 'questao_2_PinosIntramedularesTibiais_4',
      }
    },
    {
      title: 'Parafusos pequenos e cânulados',
      options: {
        q1: 'questao_2_ParafusosPequenosCanulados_1',
        q2: 'questao_2_ParafusosPequenosCanulados_2',
        q3: 'questao_2_ParafusosPequenosCanulados_3',
        q4: 'questao_2_ParafusosPequenosCanulados_4',
      }
    },
    {
      title: 'Parafusos grandes e canulados',
      options: {
        q1: 'questao_2_ParafusosGrandescanulados_1',
        q2: 'questao_2_ParafusosGrandescanulados_2',
        q3: 'questao_2_ParafusosGrandescanulados_3',
        q4: 'questao_2_ParafusosGrandescanulados_4',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'questao_2_GrandesFixaCoesExternas_1',
        q2: 'questao_2_GrandesFixaCoesExternas_2',
        q3: 'questao_2_GrandesFixaCoesExternas_3',
        q4: 'questao_2_GrandesFixaCoesExternas_4',
      }
    },
    {
      title: 'Fixações externas médias',
      options: {
        q1: 'questao_2_FixacoesExternasMedias_1',
        q2: 'questao_2_FixacoesExternasMedias_2',
        q3: 'questao_2_FixacoesExternasMedias_3',
        q4: 'questao_2_FixacoesExternasMedias_4',
      }
    },
    {
      title: 'Pequenas Fixações Externas',
      options: {
        q1: 'questao_2_PequenasFixaCoesExternas_1',
        q2: 'questao_2_PequenasFixaCoesExternas_2',
        q3: 'questao_2_PequenasFixaCoesExternas_3',
        q4: 'questao_2_PequenasFixaCoesExternas_4',
      }
    },
    {
      title: 'Mini Fixações Externas',
      options: {
        q1: 'questao_2_MiniFixacoesExternas_1',
        q2: 'questao_2_MiniFixacoesExternas_2',
        q3: 'questao_2_MiniFixacoesExternas_3',
        q4: 'questao_2_MiniFixacoesExternas_4',
      }
    },
  ]

  return (
    <>
      <div className="max-w-screen-fit">
        <form className="bigtable form-select max-w-fit " onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">2.	Abaixo listamos alguns produtos, e gostaríamos de saber até que ponto você espera flutuações nas vendas:</h2>

          <table className="border border-slate-400" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1} className="w-32 border border-slate-300">PRODUTOS VENDIDOS</th>
                <th rowSpan={3} colSpan={1} className="w-20 border border-slate-300">selecionar os que sua empresa vende</th>
                <th colSpan={3} rowSpan={1} className="border border-slate-300">Para produtos selecionados</th>
              </tr>
              <tr>
                <th colSpan={1} rowSpan={3} className="border border-slate-300">qual é o crescimento /diminuição esperado nos próximos 1-5 anos (%)</th>
                <th colSpan={2} rowSpan={1} className="border border-slate-300">O custo oscilou nos últimos 6 meses?</th>
              </tr>
              <tr>

                <th className="border border-slate-300">Se o custo flutuou, por quê?</th>
                <th className="border border-slate-300">Se sim, por quanto (%)?</th>
              </tr>
            </thead>
            <tbody>

              {questions.map(row => (
                <tr>
                  <td className="border border-slate-300" key={row.title}>{row.title}</td>
                  <td className="border border-slate-300">
                    <div className="justify-center  flex">
                      <input type="checkbox" id="" {...register(`${row.options.q1}`)} />
                    </div>
                  </td>
                  <td className="border border-slate-300"><InputText type="text"{...register(`${row.options.q2}`)} /></td>
                  <td className="border border-slate-300"><InputText {...register(`${row.options.q3}`)} /></td>
                  <td className="border border-slate-300"><InputText type="text"{...register(`${row.options.q4}`)} /></td>
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