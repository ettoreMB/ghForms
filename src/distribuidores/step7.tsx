import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";

import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export function Step7() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step8");
  }

  const questions = [
    {
      title: 'Placas para quadril ou pélvis',
      options: {
        q1: 'questao_6_PlacasParaQuadrilPelvis_1',
        q2: 'questao_6_PlacasParaQuadrilPelvis_2',
        q3: 'questao_6_PlacasParaQuadrilPelvis_3',
        q4: 'questao_6_PlacasParaQuadrilPelvis_4',
        q5: 'questao_6_PlacasParaQuadrilPelvis_5',
        q6: 'questao_6_PlacasParaQuadrilPelvis_6',
        q7: 'questao_6_PlacasParaQuadrilPelvis_7',
        q8: 'questao_6_PlacasParaQuadrilPelvis_8',
        q9: 'questao_6_PlacasParaQuadrilPelvis_9',
        q10: 'questao_6_PlacasParaQuadrilPelvis_10',
      }
    },
    {
      title: 'Placas extremidades inferiores',
      options: {
        q1: 'questao_6PlacasExtremidadesInferiores_1',
        q2: 'questao_6PlacasExtremidadesInferiores_2',
        q3: 'questao_6PlacasExtremidadesInferiores_3',
        q4: 'questao_6PlacasExtremidadesInferiores_4',
        q5: 'questao_6PlacasExtremidadesInferiores_5',
        q6: 'questao_6PlacasExtremidadesInferiores_6',
        q7: 'questao_6PlacasExtremidadesInferiores_7',
        q8: 'questao_6PlacasExtremidadesInferiores_8',
        q9: 'questao_6PlacasExtremidadesInferiores_9',
        q10: 'questao_6PlacasExtremidadesInferiores_10',
      }
    },
    {
      title: 'Placas extremidades superiores',
      options: {
        q1: 'questao_6_PlacasExtremidadesSuperiores_1',
        q2: 'questao_6_PlacasExtremidadesSuperiores_2',
        q3: 'questao_6_PlacasExtremidadesSuperiores_3',
        q4: 'questao_6_PlacasExtremidadesSuperiores_4',
        q5: 'questao_6_PlacasExtremidadesSuperiores_5',
        q6: 'questao_6_PlacasExtremidadesSuperiores_6',
        q7: 'questao_6_PlacasExtremidadesSuperiores_7',
        q8: 'questao_6_PlacasExtremidadesSuperiores_8',
        q9: 'questao_6_PlacasExtremidadesSuperiores_9',
        q10: 'questao_6_PlacasExtremidadesSuperiores_10',
      }
    },
    {
      title: 'Parafusos para quadril ou pélvis',
      options: {
        q1: 'questao_6_ParafusosQuadrilPelvis_1',
        q2: 'questao_6_ParafusosQuadrilPelvis_2',
        q3: 'questao_6_ParafusosQuadrilPelvis_3',
        q4: 'questao_6_ParafusosQuadrilPelvis_4',
        q5: 'questao_6_ParafusosQuadrilPelvis_5',
        q6: 'questao_6_ParafusosQuadrilPelvis_6',
        q7: 'questao_6_ParafusosQuadrilPelvis_7',
        q8: 'questao_6_ParafusosQuadrilPelvis_8',
        q9: 'questao_6_ParafusosQuadrilPelvis_9',
        q10: 'questao_6_ParafusosQuadrilPelvis_10',
      }
    },
    {
      title: 'Parafusos extremidades inferiores',
      options: {
        q1: 'questao_6_ParafusosExtremidadesInferiores_1',
        q2: 'questao_6_ParafusosExtremidadesInferiores_2',
        q3: 'questao_6_ParafusosExtremidadesInferiores_3',
        q4: 'questao_6_ParafusosExtremidadesInferiores_4',
        q5: 'questao_6_ParafusosExtremidadesInferiores_5',
        q6: 'questao_6_ParafusosExtremidadesInferiores_6',
        q7: 'questao_6_ParafusosExtremidadesInferiores_7',
        q8: 'questao_6_ParafusosExtremidadesInferiores_8',
        q9: 'questao_6_ParafusosExtremidadesInferiores_9',
        q10: 'questao_6_ParafusosExtremidadesInferiores_10',
      }
    },
    {
      title: 'Parafusos extremidades superiores',
      options: {
        q1: 'questao_6_ParafusosExtremidadesSuperiores_1',
        q2: 'questao_6_ParafusosExtremidadesSuperiores_2',
        q3: 'questao_6_ParafusosExtremidadesSuperiores_3',
        q4: 'questao_6_ParafusosExtremidadesSuperiores_4',
        q5: 'questao_6_ParafusosExtremidadesSuperiores_5',
        q6: 'questao_6_ParafusosExtremidadesSuperiores_6',
        q7: 'questao_6_ParafusosExtremidadesSuperiores_7',
        q8: 'questao_6_ParafusosExtremidadesSuperiores_8',
        q9: 'questao_6_ParafusosExtremidadesSuperiores_9',
        q10: 'questao_6_ParafusosExtremidadesSuperiores_10',
      }
    },
    {
      title: 'Pinos intramedulares umeral',
      options: {
        q1: 'questao_6_PinosIntramedularesUmeral_1',
        q2: 'questao_6_PinosIntramedularesUmeral_2',
        q3: 'questao_6_PinosIntramedularesUmeral_3',
        q4: 'questao_6_PinosIntramedularesUmeral_4',
        q5: 'questao_6_PinosIntramedularesUmeral_5',
        q6: 'questao_6_PinosIntramedularesUmeral_6',
        q7: 'questao_6_PinosIntramedularesUmeral_7',
        q8: 'questao_6_PinosIntramedularesUmeral_8',
        q9: 'questao_6_PinosIntramedularesUmeral_9',
        q10: 'questao_6_PinosIntramedularesUmeral_10',
      }
    },
    {
      title: 'Pinos intramedulares acetabulares',
      options: {
        q1: 'questao_6_PinosIntramedularesAcetabulares_1',
        q2: 'questao_6_PinosIntramedularesAcetabulares_2',
        q3: 'questao_6_PinosIntramedularesAcetabulares_3',
        q4: 'questao_6_PinosIntramedularesAcetabulares_4',
        q5: 'questao_6_PinosIntramedularesAcetabulares_5',
        q6: 'questao_6_PinosIntramedularesAcetabulares_6',
        q7: 'questao_6_PinosIntramedularesAcetabulares_7',
        q8: 'questao_6_PinosIntramedularesAcetabulares_8',
        q10: 'questao_6_PinosIntramedularesAcetabulares_10',
      }
    },
    {
      title: 'Pino intramedular femoral',
      options: {
        q1: 'questao_6_PinoIntramedularFemoral_1',
        q2: 'questao_6_PinoIntramedularFemoral_2',
        q3: 'questao_6_PinoIntramedularFemoral_3',
        q4: 'questao_6_PinoIntramedularFemoral_4',
        q5: 'questao_6_PinoIntramedularFemoral_5',
        q6: 'questao_6_PinoIntramedularFemoral_6',
        q7: 'questao_6_PinoIntramedularFemoral_7',
        q8: 'questao_6_PinoIntramedularFemoral_8',
        q9: 'questao_6_PinoIntramedularFemoral_9',
        q10: 'questao_6_PinoIntramedularFemoral_10',
      }
    },
    {
      title: 'Pinos intramedulares tibiais',
      options: {
        q1: 'questao_6_PinosIntramedularesTibiais_1',
        q2: 'questao_6_PinosIntramedularesTibiais_2',
        q3: 'questao_6_PinosIntramedularesTibiais_3',
        q4: 'questao_6_PinosIntramedularesTibiais_4',
        q5: 'questao_6_PinosIntramedularesTibiais_5',
        q6: 'questao_6_PinosIntramedularesTibiais_6',
        q7: 'questao_6_PinosIntramedularesTibiais_7',
        q8: 'questao_6_PinosIntramedularesTibiais_8',
        q9: 'questao_6_PinosIntramedularesTibiais_9',
        q10: 'questao_6_PinosIntramedularesTibiais_10',
      }
    },
    {
      title: 'Parafusos pequenos e cânulados',
      options: {
        q1: 'questao_6_ParafusosPequenosCanulados_1',
        q2: 'questao_6_ParafusosPequenosCanulados_2',
        q3: 'questao_6_ParafusosPequenosCanulados_3',
        q4: 'questao_6_ParafusosPequenosCanulados_4',
        q5: 'questao_6_ParafusosPequenosCanulados_5',
        q6: 'questao_6_ParafusosPequenosCanulados_6',
        q7: 'questao_6_ParafusosPequenosCanulados_7',
        q8: 'questao_6_ParafusosPequenosCanulados_8',
        q9: 'questao_6_ParafusosPequenosCanulados_9',
        q10: 'questao_6_ParafusosPequenosCanulados_10',
      }
    },
    {
      title: 'Parafusos grandes e canulados',
      options: {
        q1: 'questao_6_ParafusosGrandescanulados_1',
        q2: 'questao_6_ParafusosGrandescanulados_2',
        q3: 'questao_6_ParafusosGrandescanulados_3',
        q4: 'questao_6_ParafusosGrandescanulados_4',
        q5: 'questao_6_ParafusosGrandescanulados_5',
        q6: 'questao_6_ParafusosGrandescanulados_6',
        q7: 'questao_6_ParafusosGrandescanulados_7',
        q8: 'questao_6_ParafusosGrandescanulados_8',
        q9: 'questao_6_ParafusosGrandescanulados_9',
        q10: 'questao_6_ParafusosGrandescanulados_10',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'questao_6_GrandesFixaCoesExternas_1',
        q2: 'questao_6_GrandesFixaCoesExternas_2',
        q3: 'questao_6_GrandesFixaCoesExternas_3',
        q4: 'questao_6_GrandesFixaCoesExternas_4',
        q5: 'questao_6_GrandesFixaCoesExternas_5',
        q6: 'questao_6_GrandesFixaCoesExternas_6',
        q7: 'questao_6_GrandesFixaCoesExternas_7',
        q8: 'questao_6_GrandesFixaCoesExternas_8',
        q9: 'questao_6_GrandesFixaCoesExternas_9',
        q10: 'questao_6_GrandesFixaCoesExternas_10',
      }
    },
    {
      title: 'Fixações externas médias',
      options: {
        q1: 'questao_6_FixacoesExternasMedias_1',
        q2: 'questao_6_FixacoesExternasMedias_2',
        q3: 'questao_6_FixacoesExternasMedias_3',
        q4: 'questao_6_FixacoesExternasMedias_4',
        q5: 'questao_6_FixacoesExternasMedias_5',
        q6: 'questao_6_FixacoesExternasMedias_6',
        q7: 'questao_6_FixacoesExternasMedias_7',
        q8: 'questao_6_FixacoesExternasMedias_8',
        q9: 'questao_6_FixacoesExternasMedias_9',
        q10: 'questao_6_FixacoesExternasMedias_10',
      }
    },
    {
      title: 'Pequenas Fixações Externas',
      options: {
        q1: 'questao_6_PequenasFixaCoesExternas_1',
        q2: 'questao_6_PequenasFixaCoesExternas_2',
        q3: 'questao_6_PequenasFixaCoesExternas_3',
        q4: 'questao_6_PequenasFixaCoesExternas_4',
        q5: 'questao_6_PequenasFixaCoesExternas_5',
        q6: 'questao_6_PequenasFixaCoesExternas_6',
        q7: 'questao_6_PequenasFixaCoesExternas_7',
        q8: 'questao_6_PequenasFixaCoesExternas_8',
        q9: 'questao_6_PequenasFixaCoesExternas_9',
        q10: 'questao_6_PequenasFixaCoesExternas_10',
      }
    },
    {
      title: 'Mini Fixações Externas',
      options: {
        q1: 'questao_6_MiniFixacoesExternas_1',
        q2: 'questao_6_MiniFixacoesExternas_2',
        q3: 'questao_6_MiniFixacoesExternas_3',
        q4: 'questao_6_MiniFixacoesExternas_4',
        q5: 'questao_6_MiniFixacoesExternas_5',
        q6: 'questao_6_MiniFixacoesExternas_6',
        q7: 'questao_6_MiniFixacoesExternas_7',
        q8: 'questao_6_MiniFixacoesExternas_8',
        q9: 'questao_6_MiniFixacoesExternas_9',
        q10: 'questao_6_MiniFixacoesExternas_10',
      }
    },
  ]

  return (
    <>
      <div className="container ">
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Principais características do produto para os procedimentos de trauma mais frequentes realizados:</h2>
          </div>

          <div className="pl-4">
            <h3>a•	Qual é a melhor marca usada para cada tipo de produto? Por favor preencha na tabela abaixo.</h3>
            <h3>b•	Você está ciente do preço que os hospitais privados normalmente pagam por cada produto? Se sim, qual é o preço médio de cada dispositivo? Por favor preencha na tabela abaixo. </h3>
            <h3>c•	Classifique os atributos do produto que são mais relevantes para você, na tabela abaixo. </h3>
          </div>
          <table className="border-collapse border border-slate-400 table-auto">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1} className="w-58">Tipos</th>
                <th rowSpan={3} colSpan={1} className="w-52">MARCA MAIS VENDIDA</th>
                <th rowSpan={3} colSpan={1} className="w-48">Preço médio de venda da marca top</th>
                <th rowSpan={3} colSpan={1} className="w-48">Inventário mantido(semana/mês)</th>
                <th colSpan={7} rowSpan={1} className="w-48">ATRIBUTOS DE PRODUTO MAIS BEM AVALIADOS pelos hospitais (ordem de classificação de 1 a 7)</th>
              </tr>
              <tr>

                <th className="w-36 break-normal">Acessibilidade (Custo)</th>
                <th className="w-36  break-normal">Alto desempenho clínico</th>
                <th className="w-36  break-normal">Disponibilidade de produtos/inventário</th>
                <th className="w-36  break-normal">Suporte e treinamento por fabricante para uso</th>
                <th className="w-36  break-normal">Capacidade de usar produtos para outros tipos de procedimentos</th>
                <th className="w-36  break-normal">Percepção da marca como "premium"</th>
                <th className="w-36  break-normal">Outros(por favor, especifiquem): </th>
              </tr>
            </thead>
            <tbody>

              {questions.map(row => (
                <tr className="break-normal">
                  <td key={row.title}>{row.title}</td>
                  <td ><textarea defaultValue={state.data[`${row.options.q1}`]}{...register(`${row.options.q1}`)} /></td>
                  <td ><InputText placeholder="R$" type="number" defaultValue={state.data[`${row.options.q2}`]} {...register(`${row.options.q2}`)} /></td>
                  <td ><textarea defaultValue={state.data[`${row.options.q10}`]} {...register(`${row.options.q10}`)} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q3}`]} {...register(`${row.options.q3}`, { min: 1, max: 7 })} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q4}`]} {...register(`${row.options.q4}`, { min: 1, max: 7 })} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q5}`]} {...register(`${row.options.q5}`, { min: 1, max: 7 })} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q6}`]} {...register(`${row.options.q6}`, { min: 1, max: 7 })} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q7}`]} {...register(`${row.options.q7}`, { min: 1, max: 7 })} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q8}`]} {...register(`${row.options.q8}`, { min: 1, max: 7 })} /></td>
                  <td ><InputText type="number" placeholder="1 ~ 7" min={1} max={7} defaultValue={state.data[`${row.options.q9}`]} {...register(`${row.options.q9}`, { min: 1, max: 7 })} /></td>
                </tr>
              ))}

            </tbody>
          </table>
          <NextStepButton step={5} totalSteps={7} />
        </form>
      </div>
    </>
  )
}
