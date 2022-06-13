import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";

import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export function Step5() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const valuesInStorage: any = localStorage.getItem("__LSM__");
  const values = JSON.parse(valuesInStorage);
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
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <h2 >3.	Quais produtos e marcas você vende  atualmente para procedimentos de Trauma?  </h2>

          <table >
            <thead>
              <tr>
                <th className="break-normal w-[150px] sm:w-52" >PRODUTOS VENDIDOS</th>
                <th className="break-normal sm:break-words w-24">selecionar os que sua empresa vende</th>
                <th className="break-normal sm:break-words sm:w-[300px] w-[200px]">As marcas mais vendidas?</th>
                <th className="break-normal sm:break-words sm:w-[300px] w-[200px]">Por que? O que explica a preferência da marca?</th>
              </tr>
            </thead>
            <tbody>

              {questions.map(row => (
                <tr className="break-normal">
                  <td key={row.title}>{row.title}</td>
                  <td >
                    <div className="justify-center w-full flex">
                      <input type="checkbox" defaultChecked={values?.data[`${row.options.q1}`]} {...register(`${row.options.q1}`)} />
                    </div>
                  </td>
                  <td><textarea defaultValue={values?.data[`${row.options.q2}`]}{...register(`${row.options.q2}`)} /></td>
                  <td><textarea defaultValue={values?.data[`${row.options.q3}`]} {...register(`${row.options.q3}`)} /></td>
                </tr>
              ))}

            </tbody>
          </table>
          <NextStepButton step={3} totalSteps={7} />
        </form>
      </div>
    </>
  )
}
