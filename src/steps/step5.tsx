import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";

import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step5() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step6");
  }

  const questions = [
    {
      title: 'Placas para quadril ou pélvis',
      options: {
        q1: 'questao_3_PlacasParaQuadrilPelvis_1',
        q2: 'questao_3_PlacasParaQuadrilPelvis_2',
        q3: 'questao_3_PlacasParaQuadrilPelvis_3',
        q4: 'questao_3_PlacasParaQuadrilPelvis_4',
      }
    },
    {
      title: 'Placas extremidades inferiores',
      options: {
        q1: 'questao_3_PlacasExtremidadesInferiores_1',
        q2: 'questao_3_PlacasExtremidadesInferiores_2',
        q3: 'questao_3_PlacasExtremidadesInferiores_3',
        q4: 'questao_3_PlacasExtremidadesInferiores_4',
      }
    },
    {
      title: 'Placas extremidades superiores',
      options: {
        q1: 'questao_3_PlacasExtremidadesSuperiores_1',
        q2: 'questao_3_PlacasExtremidadesSuperiores_2',
        q3: 'questao_3_PlacasExtremidadesSuperiores_3',
        q4: 'questao_3_PlacasExtremidadesSuperiores_4',
      }
    },
    {
      title: 'Parafusos para quadril ou pélvis',
      options: {
        q1: 'questao_3_ParafusosQuadrilPelvis_1',
        q2: 'questao_3_ParafusosQuadrilPelvis_2',
        q3: 'questao_3_ParafusosQuadrilPelvis_3',
        q4: 'questao_3_ParafusosQuadrilPelvis_4'
      }
    },
    {
      title: 'Parafusos extremidades inferiores',
      options: {
        q1: 'questao_3_ParafusosExtremidadesInferiores_1',
        q2: 'questao_3_ParafusosExtremidadesInferiores_2',
        q3: 'questao_3_ParafusosExtremidadesInferiores_3',
        q4: 'questao_3_ParafusosExtremidadesInferiores_4',
      }
    },
    {
      title: 'Parafusos extremidades superiores',
      options: {
        q1: 'questao_3_ParafusosExtremidadesSuperiores_1',
        q2: 'questao_3_ParafusosExtremidadesSuperiores_2',
        q3: 'questao_3_ParafusosExtremidadesSuperiores_3',
        q4: 'questao_3_ParafusosExtremidadesSuperiores_4',
      }
    },
    {
      title: 'Pinos intramedulares umeral',
      options: {
        q1: 'questao_3_PinosIntramedularesUmeral_1',
        q2: 'questao_3_PinosIntramedularesUmeral_2',
        q3: 'questao_3_PinosIntramedularesUmeral_3',
        q4: 'questao_3_PinosIntramedularesUmeral_4',
      }
    },
    {
      title: 'Pinos intramedulares acetabulares',
      options: {
        q1: 'questao_3_PinosIntramedularesAcetabulares_1',
        q2: 'questao_3_PinosIntramedularesAcetabulares_2',
        q3: 'questao_3_PinosIntramedularesAcetabulares_3',
        q4: 'questao_3_PinosIntramedularesAcetabulares_4'
      }
    },
    {
      title: 'Pino intramedular femoral',
      options: {
        q1: 'questao_3_PinoIntramedularFemoral_1',
        q2: 'questao_3_PinoIntramedularFemoral_2',
        q3: 'questao_3_PinoIntramedularFemoral_3',
        q4: 'questao_3_PinoIntramedularFemoral_4',
      }
    },
    {
      title: 'Pinos intramedulares tibiais',
      options: {
        q1: 'questao_3_PinosIntramedularesTibiais_1',
        q2: 'questao_3_PinosIntramedularesTibiais_2',
        q3: 'questao_3_PinosIntramedularesTibiais_3',
        q4: 'questao_3_PinosIntramedularesTibiais_4',
      }
    },
    {
      title: 'Parafusos pequenos e cânulados',
      options: {
        q1: 'questao_3_ParafusosPequenosCanulados_1',
        q2: 'questao_3_ParafusosPequenosCanulados_2',
        q3: 'questao_3_ParafusosPequenosCanulados_3',
        q4: 'questao_3_ParafusosPequenosCanulados_4',
      }
    },
    {
      title: 'Parafusos grandes e canulados',
      options: {
        q1: 'questao_3_ParafusosGrandescanulados_1',
        q2: 'questao_3_ParafusosGrandescanulados_2',
        q3: 'questao_3_ParafusosGrandescanulados_3',
        q4: 'questao_3_ParafusosGrandescanulados_4',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'questao_3_GrandesFixaCoesExternas_1',
        q2: 'questao_3_GrandesFixaCoesExternas_2',
        q3: 'questao_3_GrandesFixaCoesExternas_3',
        q4: 'questao_3_GrandesFixaCoesExternas_4',
      }
    },
    {
      title: 'Fixações externas médias',
      options: {
        q1: 'questao_3_FixacoesExternasMedias_1',
        q2: 'questao_3_FixacoesExternasMedias_2',
        q3: 'questao_3_FixacoesExternasMedias_3',
        q4: 'questao_3_FixacoesExternasMedias_4',
      }
    },
    {
      title: 'Pequenas Fixações Externas',
      options: {
        q1: 'questao_3_PequenasFixaCoesExternas_1',
        q2: 'questao_3_PequenasFixaCoesExternas_2',
        q3: 'questao_3_PequenasFixaCoesExternas_3',
        q4: 'questao_3_PequenasFixaCoesExternas_4',
      }
    },
    {
      title: 'Mini Fixações Externas',
      options: {
        q1: 'questao_3_MiniFixacoesExternas_1',
        q2: 'questao_3_MiniFixacoesExternas_2',
        q3: 'questao_3_MiniFixacoesExternas_3',
        q4: 'questao_3_MiniFixacoesExternas_4',
      }
    },
  ]

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">3.	Quais produtos e marcas você vende  atualmente para procedimentos de Trauma?  </h2>

          <table className="border-collapse border border-slate-400 table-auto">
            <thead>
              <tr>
                <th className="border border-slate-300">PRODUTOS VENDIDOS</th>
                <th className="border border-slate-300">selecionar os que sua empresa vende</th>
                <th className="border border-slate-300">As marcas mais vendidas?</th>
                <th className="border border-slate-300">Por que? O que explica a preferência da marca?</th>
              </tr>
            </thead>
            <tbody>

              {questions.map(row => (
                <tr>
                  <td className="w-1/12 border border-slate-300" key={row.title}>{row.title}</td>
                  <td className="w-1/12 border border-slate-300">
                    <div className="justify-center w-full flex">
                      <input type="checkbox" id="" {...register(`${row.options.q1}`)} />
                    </div>
                  </td>
                  <td className="w-2/12 border border-slate-300"><InputText {...register(`${row.options.q2}`)} /></td>
                  <td className="w-2/12  border border-slate-300"><InputText {...register(`${row.options.q3}`)} /></td>
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
