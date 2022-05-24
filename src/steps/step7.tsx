import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step7() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    console.log(data)
    navigate("/step8");
  }

  const questions = [
    {
      title: 'Placas para quadril ou pélvis',
      options: {
        q1: 'PlacasParaQuadrilPelvis_B_7_1',
        q2: 'PlacasParaQuadrilPelvis_B_7_2',
        q3: 'PlacasParaQuadrilPelvis_B_7_3',
        q4: 'PlacasParaQuadrilPelvis_B_7_1',
        q5: 'PlacasParaQuadrilPelvis_B_7_2',
        q6: 'PlacasParaQuadrilPelvis_B_7_3',
        q7: 'PlacasParaQuadrilPelvis_B_7_1',
        q8: 'PlacasParaQuadrilPelvis_B_7_2',
        q9: 'PlacasParaQuadrilPelvis_B_7_3',
      }
    },
    {
      title: 'Placas extremidades inferiores',
      options: {
        q1: 'PlacasExtremidadesInferiores_B_7_1',
        q2: 'PlacasExtremidadesInferiores_B_7_2',
        q3: 'PlacasExtremidadesInferiores_B_7_3',
        q4: 'PlacasExtremidadesInferiores_B_7_1',
        q5: 'PlacasExtremidadesInferiores_B_7_2',
        q6: 'PlacasExtremidadesInferiores_B_7_3',
        q7: 'PlacasExtremidadesInferiores_B_7_1',
        q8: 'PlacasExtremidadesInferiores_B_7_2',
        q9: 'PlacasExtremidadesInferiores_B_7_3',
      }
    },
    {
      title: 'Placas extremidades superiores',
      options: {
        q1: 'PlacasExtremidadesSuperiores_B_7_1',
        q2: 'PlacasExtremidadesSuperiores_B_7_2',
        q3: 'PlacasExtremidadesSuperiores_B_7_3',
        q4: 'PlacasExtremidadesSuperiores_B_7_1',
        q5: 'PlacasExtremidadesSuperiores_B_7_2',
        q6: 'PlacasExtremidadesSuperiores_B_7_3',
        q7: 'PlacasExtremidadesSuperiores_B_7_1',
        q8: 'PlacasExtremidadesSuperiores_B_7_2',
        q9: 'PlacasExtremidadesSuperiores_B_7_3',
      }
    },
    {
      title: 'Parafusos para quadril ou pélvis',
      options: {
        q1: 'ParafusosQuadrilPelvis_B_7_1',
        q2: 'ParafusosQuadrilPelvis_B_7_2',
        q3: 'ParafusosQuadrilPelvis_B_7_3',
        q4: 'ParafusosQuadrilPelvis_B_7_1',
        q5: 'ParafusosQuadrilPelvis_B_7_2',
        q6: 'ParafusosQuadrilPelvis_B_7_3',
        q7: 'ParafusosQuadrilPelvis_B_7_1',
        q8: 'ParafusosQuadrilPelvis_B_7_2',
        q9: 'ParafusosQuadrilPelvis_B_7_3',
      }
    },
    {
      title: 'Parafusos extremidades inferiores',
      options: {
        q1: 'ParafusosExtremidadesInferiores_B_7_1',
        q2: 'ParafusosExtremidadesInferiores_B_7_2',
        q3: 'ParafusosExtremidadesInferiores_B_7_3',
        q4: 'ParafusosExtremidadesInferiores_B_7_1',
        q5: 'ParafusosExtremidadesInferiores_B_7_2',
        q6: 'ParafusosExtremidadesInferiores_B_7_3',
        q7: 'ParafusosExtremidadesInferiores_B_7_1',
        q8: 'ParafusosExtremidadesInferiores_B_7_2',
        q9: 'ParafusosExtremidadesInferiores_B_7_3',
      }
    },
    {
      title: 'Parafusos extremidades superiores',
      options: {
        q1: 'ParafusosExtremidadesSuperiores_B_7_1',
        q2: 'ParafusosExtremidadesSuperiores_B_7_2',
        q3: 'ParafusosExtremidadesSuperiores_B_7_3',
        q4: 'ParafusosExtremidadesSuperiores_B_7_1',
        q5: 'ParafusosExtremidadesSuperiores_B_7_2',
        q6: 'ParafusosExtremidadesSuperiores_B_7_3',
        q7: 'ParafusosExtremidadesSuperiores_B_7_1',
        q8: 'ParafusosExtremidadesSuperiores_B_7_2',
        q9: 'ParafusosExtremidadesSuperiores_B_7_3',
      }
    },
    {
      title: 'Pinos intramedulares umeral',
      options: {
        q1: 'PinosIntramedularesUmeral_B_7_1',
        q2: 'PinosIntramedularesUmeral_B_7_2',
        q3: 'PinosIntramedularesUmeral_B_7_3',
        q4: 'PinosIntramedularesUmeral_B_7_1',
        q5: 'PinosIntramedularesUmeral_B_7_2',
        q6: 'PinosIntramedularesUmeral_B_7_3',
        q7: 'PinosIntramedularesUmeral_B_7_1',
        q8: 'PinosIntramedularesUmeral_B_7_2',
        q9: 'PinosIntramedularesUmeral_B_7_3',
      }
    },
    {
      title: 'Pinos intramedulares acetabulares',
      options: {
        q1: 'PinosIntramedularesAcetabulares_B_7_1',
        q2: 'PinosIntramedularesAcetabulares_B_7_2',
        q3: 'PinosIntramedularesAcetabulares_B_7_3',
        q4: 'PinosIntramedularesAcetabulares_B_7_1',
        q5: 'PinosIntramedularesAcetabulares_B_7_2',
        q6: 'PinosIntramedularesAcetabulares_B_7_3',
        q7: 'PinosIntramedularesAcetabulares_B_7_1',
        q8: 'PinosIntramedularesAcetabulares_B_7_2',
        q9: 'PinosIntramedularesAcetabulares_B_7_3',
      }
    },
    {
      title: 'Pino intramedular femoral',
      options: {
        q1: 'PinoIntramedularFemoral_B_7_1',
        q2: 'PinoIntramedularFemoral_B_7_2',
        q3: 'PinoIntramedularFemoral_B_7_3',
        q4: 'PinoIntramedularFemoral_B_7_1',
        q5: 'PinoIntramedularFemoral_B_7_2',
        q6: 'PinoIntramedularFemoral_B_7_3',
        q7: 'PinoIntramedularFemoral_B_7_1',
        q8: 'PinoIntramedularFemoral_B_7_2',
        q9: 'PinoIntramedularFemoral_B_7_3',
      }
    },
    {
      title: 'Pinos intramedulares tibiais',
      options: {
        q1: 'PinosIntramedularesTibiais_B_7_1',
        q2: 'PinosIntramedularesTibiais_B_7_2',
        q3: 'PinosIntramedularesTibiais_B_7_3',
        q4: 'PinosIntramedularesTibiais_B_7_1',
        q5: 'PinosIntramedularesTibiais_B_7_2',
        q6: 'PinosIntramedularesTibiais_B_7_3',
        q7: 'PinosIntramedularesTibiais_B_7_1',
        q8: 'PinosIntramedularesTibiais_B_7_2',
        q9: 'PinosIntramedularesTibiais_B_7_3',
      }
    },
    {
      title: 'Parafusos pequenos e cânulados',
      options: {
        q1: 'ParafusosPequenosCanulados_B_7_1',
        q2: 'ParafusosPequenosCanulados_B_7_2',
        q3: 'ParafusosPequenosCanulados_B_7_3',
        q4: 'ParafusosPequenosCanulados_B_7_1',
        q5: 'ParafusosPequenosCanulados_B_7_2',
        q6: 'ParafusosPequenosCanulados_B_7_3',
        q7: 'ParafusosPequenosCanulados_B_7_1',
        q8: 'ParafusosPequenosCanulados_B_7_2',
        q9: 'ParafusosPequenosCanulados_B_7_3',
      }
    },
    {
      title: 'Parafusos grandes e canulados',
      options: {
        q1: 'ParafusosGrandescanulados_B_7_1',
        q2: 'ParafusosGrandescanulados_B_7_2',
        q3: 'ParafusosGrandescanulados_B_7_3',
        q4: 'ParafusosGrandescanulados_B_7_1',
        q5: 'ParafusosGrandescanulados_B_7_2',
        q6: 'ParafusosGrandescanulados_B_7_3',
        q7: 'ParafusosGrandescanulados_B_7_1',
        q8: 'ParafusosGrandescanulados_B_7_2',
        q9: 'ParafusosGrandescanulados_B_7_3',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'GrandesFixaCoesExternas_B_7_1',
        q2: 'GrandesFixaCoesExternas_B_7_2',
        q3: 'GrandesFixaCoesExternas_B_7_3',
        q4: 'GrandesFixaCoesExternas_B_7_1',
        q5: 'GrandesFixaCoesExternas_B_7_2',
        q6: 'GrandesFixaCoesExternas_B_7_3',
        q7: 'GrandesFixaCoesExternas_B_7_1',
        q8: 'GrandesFixaCoesExternas_B_7_2',
        q9: 'GrandesFixaCoesExternas_B_7_3',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'GrandesFixaCoesExternas_B_7_1',
        q2: 'GrandesFixaCoesExternas_B_7_2',
        q3: 'GrandesFixaCoesExternas_B_7_3',
        q4: 'GrandesFixaCoesExternas_B_7_1',
        q5: 'GrandesFixaCoesExternas_B_7_2',
        q6: 'GrandesFixaCoesExternas_B_7_3',
        q7: 'GrandesFixaCoesExternas_B_7_1',
        q8: 'GrandesFixaCoesExternas_B_7_2',
        q9: 'GrandesFixaCoesExternas_B_7_3',
      }
    },
    {
      title: 'Fixações externas médias',
      options: {
        q1: 'FixacoesExternasMedias_B_7_1',
        q2: 'FixacoesExternasMedias_B_7_2',
        q3: 'FixacoesExternasMedias_B_7_3',
        q4: 'FixacoesExternasMedias_B_7_1',
        q5: 'FixacoesExternasMedias_B_7_2',
        q6: 'FixacoesExternasMedias_B_7_3',
        q7: 'FixacoesExternasMedias_B_7_1',
        q8: 'FixacoesExternasMedias_B_7_2',
        q9: 'FixacoesExternasMedias_B_7_3',
      }
    },
    {
      title: 'Pequenas Fixações Externas',
      options: {
        q1: 'PequenasFixaCoesExternas_B_7_1',
        q2: 'PequenasFixaCoesExternas_B_7_2',
        q3: 'PequenasFixaCoesExternas_B_7_3',
        q4: 'PequenasFixaCoesExternas_B_7_1',
        q5: 'PequenasFixaCoesExternas_B_7_2',
        q6: 'PequenasFixaCoesExternas_B_7_3',
        q7: 'PequenasFixaCoesExternas_B_7_1',
        q8: 'PequenasFixaCoesExternas_B_7_2',
        q9: 'PequenasFixaCoesExternas_B_7_3',
      }
    },
    {
      title: 'Mini Fixações Externas',
      options: {
        q1: 'MiniFixacoesExternas_B_7_1',
        q2: 'MiniFixacoesExternas_B_7_2',
        q3: 'MiniFixacoesExternas_B_7_3',
        q4: 'MiniFixacoesExternas_B_7_1',
        q5: 'MiniFixacoesExternas_B_7_2',
        q6: 'MiniFixacoesExternas_B_7_3',
        q7: 'MiniFixacoesExternas_B_7_1',
        q8: 'MiniFixacoesExternas_B_7_2',
        q9: 'MiniFixacoesExternas_B_7_3',
      }
    },
  ]

  return (
    <>
      <div className="w-full my-10">
        <form className="bigtable max-w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">Das seguintes marcas, quais você usa/vende?</h2>
          </div>
          <h3 className="question">Principais características do produto para os procedimentos de trauma mais frequentes realizados: </h3>
          <div>
            <h3 className="question">a•	Qual é a melhor marca usada para cada tipo de produto? Por favor preencha na tabela abaixo.</h3>
            <h3 className="question">b•	Você está ciente do preço que os hospitais privados normalmente pagam por cada produto? Se sim, qual é o preço médio de cada dispositivo? Por favor preencha na tabela abaixo. </h3>
            <h3 className="question">c•	Classifique os atributos do produto que são mais relevantes para você, na tabela abaixo. </h3>
          </div>
          <table className="border-collapse border border-slate-400 table-auto">
            <thead>
              <tr>
                <th className="border border-slate-300">Tipos</th>
                <th className="border border-slate-300">MARCA MAIS VENDIDA</th>
                <th className="border border-slate-300 ">Preço médio de venda da marca top</th>
                <th className="border border-slate-300 ">Acessibilidade (Custo)</th>
                <th className="border border-slate-300 ">Alto desempenho clínico</th>
                <th className="border border-slate-300 ">Disponibilidade de produtos/inventário</th>
                <th className="border border-slate-300 ">Suporte e treinamento por fabricante para uso</th>
                <th className="border border-slate-300 ">Capacidade de usar produtos para outros tipos de procedimentos</th>
                <th className="border border-slate-300 ">Percepção da marca como "premium"</th>
                <th className="border border-slate-300 ">Outros (por favor, especifiquem): </th>
              </tr>
            </thead>
            <tbody>

              {questions.map(row => (
                <tr>
                  <td className="border border-slate-300" key={row.title}>{row.title}</td>
                  <td className="border border-slate-300"><InputText {...register(`${row.options.q2}`)} /></td>
                  <td className="border border-slate-300 "><InputText placeholder="R$" {...register(`${row.options.q2}`)} /></td>
                  <td className="border border-slate-300"><InputText placeholder="R$" {...register(`${row.options.q3}`)} /></td>
                  <td className="border border-slate-300"><InputText {...register(`${row.options.q4}`)} /></td>
                  <td className="border border-slate-300 "><InputText {...register(`${row.options.q5}`)} /></td>
                  <td className="border border-slate-300"><InputText {...register(`${row.options.q6}`)} /></td>
                  <td className="border border-slate-300"><InputText {...register(`${row.options.q7}`)} /></td>
                  <td className="border border-slate-300 "><InputText {...register(`${row.options.q8}`)} /></td>
                  <td className="border border-slate-300"><InputText {...register(`${row.options.q9}`)} /></td>
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
