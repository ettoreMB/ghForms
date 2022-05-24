import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step4() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    console.log(data)
    navigate("/step5");
  }

  const questions = [
    {
      title: 'Placas para quadril ou pélvis',
      options: {
        q1: 'PlacasParaQuadrilPelvis_section__A_2_1',
        q2: 'PlacasParaQuadrilPelvis_section__A_2_2',
        q3: 'PlacasParaQuadrilPelvis_section__A_2_3',
        q4: 'PlacasParaQuadrilPelvis_section__A_2_4',
      }
    },
    {
      title: 'Placas extremidades inferiores',
      options: {
        q1: 'PlacasExtremidadesInferiores_section__A_2_1',
        q2: 'PlacasExtremidadesInferiores_section__A_2_2',
        q3: 'PlacasExtremidadesInferiores_section__A_2_3',
        q4: 'PlacasExtremidadesInferiores_section__A_2_4',
      }
    },
    {
      title: 'Placas extremidades superiores',
      options: {
        q1: 'PlacasExtremidadesSuperiores_section__A_2_1',
        q2: 'PlacasExtremidadesSuperiores_section__A_2_2',
        q3: 'PlacasExtremidadesSuperiores_section__A_2_3',
        q4: 'PlacasExtremidadesSuperiores_section__A_2_4',
      }
    },
    {
      title: 'Parafusos para quadril ou pélvis',
      options: {
        q1: 'ParafusosQuadrilPelvis_section__A_2_1',
        q2: 'ParafusosQuadrilPelvis_section__A_2_2',
        q3: 'ParafusosQuadrilPelvis_section__A_2_3',
        q4: 'ParafusosQuadrilPelvis_section__A_2_4'
      }
    },
    {
      title: 'Parafusos extremidades inferiores',
      options: {
        q1: 'ParafusosExtremidadesInferiores_section__A_2_1',
        q2: 'ParafusosExtremidadesInferiores_section__A_2_2',
        q3: 'ParafusosExtremidadesInferiores_section__A_2_3',
        q4: 'ParafusosExtremidadesInferiores_section__A_2_4',
      }
    },
    {
      title: 'Parafusos extremidades superiores',
      options: {
        q1: 'ParafusosExtremidadesSuperiores_section__A_2_1',
        q2: 'ParafusosExtremidadesSuperiores_section__A_2_2',
        q3: 'ParafusosExtremidadesSuperiores_section__A_2_3',
        q4: 'ParafusosExtremidadesSuperiores_section__A_2_4',
      }
    },
    {
      title: 'Pinos intramedulares umeral',
      options: {
        q1: 'PinosIntramedularesUmeral_section__A_2_1',
        q2: 'PinosIntramedularesUmeral_section__A_2_2',
        q3: 'PinosIntramedularesUmeral_section__A_2_3',
        q4: 'PinosIntramedularesUmeral_section__A_2_4',
      }
    },
    {
      title: 'Pinos intramedulares acetabulares',
      options: {
        q1: 'PinosIntramedularesAcetabulares_section__A_2_1',
        q2: 'PinosIntramedularesAcetabulares_section__A_2_2',
        q3: 'PinosIntramedularesAcetabulares_section__A_2_3',
        q4: 'PinosIntramedularesAcetabulares_section__A_2_4'
      }
    },
    {
      title: 'Pino intramedular femoral',
      options: {
        q1: 'PinoIntramedularFemoral_section__A_2_1',
        q2: 'PinoIntramedularFemoral_section__A_2_2',
        q3: 'PinoIntramedularFemoral_section__A_2_3',
        q4: 'PinoIntramedularFemoral_section__A_2_4',
      }
    },
    {
      title: 'Pinos intramedulares tibiais',
      options: {
        q1: 'PinosIntramedularesTibiais_section__A_2_1',
        q2: 'PinosIntramedularesTibiais_section__A_2_2',
        q3: 'PinosIntramedularesTibiais_section__A_2_3',
        q4: 'PinosIntramedularesTibiais_section__A_2_4',
      }
    },
    {
      title: 'Parafusos pequenos e cânulados',
      options: {
        q1: 'ParafusosPequenosCanulados_section__A_2_1',
        q2: 'ParafusosPequenosCanulados_section__A_2_2',
        q3: 'ParafusosPequenosCanulados_section__A_2_3',
        q4: 'ParafusosPequenosCanulados_section__A_2_4',
      }
    },
    {
      title: 'Parafusos grandes e canulados',
      options: {
        q1: 'ParafusosGrandescanulados_section__A_2_1',
        q2: 'ParafusosGrandescanulados_section__A_2_2',
        q3: 'ParafusosGrandescanulados_section__A_2_3',
        q4: 'ParafusosGrandescanulados_section__A_2_4',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'GrandesFixaCoesExternas_section__A_2_1',
        q2: 'GrandesFixaCoesExternas_section__A_2_2',
        q3: 'GrandesFixaCoesExternas_section__A_2_3',
        q4: 'GrandesFixaCoesExternas_section__A_2_4',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'GrandesFixaCoesExternas_section__A_2_1',
        q2: 'GrandesFixaCoesExternas_section__A_2_2',
        q3: 'GrandesFixaCoesExternas_section__A_2_3',
        q4: 'GrandesFixaCoesExternas_section__A_2_4',
      }
    },
    {
      title: 'Fixações externas médias',
      options: {
        q1: 'FixacoesExternasMedias_section__A_2_1',
        q2: 'FixacoesExternasMedias_section__A_2_2',
        q3: 'FixacoesExternasMedias_section__A_2_3',
        q4: 'FixacoesExternasMedias_section__A_2_4',
      }
    },
    {
      title: 'Pequenas Fixações Externas',
      options: {
        q1: 'PequenasFixaCoesExternas_section__A_2_1',
        q2: 'PequenasFixaCoesExternas_section__A_2_2',
        q3: 'PequenasFixaCoesExternas_section__A_2_3',
        q4: 'PequenasFixaCoesExternas_section__A_2_4',
      }
    },
    {
      title: 'Mini Fixações Externas',
      options: {
        q1: 'MiniFixacoesExternas_section__A_2_1',
        q2: 'MiniFixacoesExternas_section__A_2_2',
        q3: 'MiniFixacoesExternas_section__A_2_3',
        q4: 'MiniFixacoesExternas_section__A_2_4',
      }
    },
  ]

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">2.	Abaixo listamos alguns produtos, e gostaríamos de saber até que ponto você espera flutuações nas vendas:</h2>

          <table className="border border-slate-400" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1} className="border border-slate-300">PRODUTOS VENDIDOS</th>
                <th rowSpan={3} colSpan={1} className="border border-slate-300">selecionar os que sua empresa vende</th>
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
                    <div className="justify-center w-full flex">
                      <input type="checkbox" id="" {...register(`${row.options.q1}`)} />
                    </div>
                  </td>
                  <td className="  border border-slate-300"><InputText {...register(`${row.options.q2}`)} /></td>
                  <td className="    border border-slate-300"><InputText {...register(`${row.options.q3}`)} /></td>
                  <td className="    border border-slate-300"><InputText {...register(`${row.options.q4}`)} /></td>
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
