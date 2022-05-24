import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step5() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    console.log(data)
    navigate("/step6");
  }

  const questions = [
    {
      title: 'Placas para quadril ou pélvis',
      options: {
        q1: 'PlacasParaQuadrilPelvis_section__B_3_1',
        q2: 'PlacasParaQuadrilPelvis_section__B_3_2',
        q3: 'PlacasParaQuadrilPelvis_section__B_3_3',
      }
    },
    {
      title: 'Placas extremidades inferiores',
      options: {
        q1: 'PlacasExtremidadesInferiores_section__B_3_1',
        q2: 'PlacasExtremidadesInferiores_section__B_3_2',
        q3: 'PlacasExtremidadesInferiores_section__B_3_3',
      }
    },
    {
      title: 'Placas extremidades superiores',
      options: {
        q1: 'PlacasExtremidadesSuperiores_section__B_3_1',
        q2: 'PlacasExtremidadesSuperiores_section__B_3_2',
        q3: 'PlacasExtremidadesSuperiores_section__B_3_3',
      }
    },
    {
      title: 'Parafusos para quadril ou pélvis',
      options: {
        q1: 'ParafusosQuadrilPelvis_section__B_3_1',
        q2: 'ParafusosQuadrilPelvis_section__B_3_2',
        q3: 'ParafusosQuadrilPelvis_section__B_3_3',
      }
    },
    {
      title: 'Parafusos extremidades inferiores',
      options: {
        q1: 'ParafusosExtremidadesInferiores_section__B_3_1',
        q2: 'ParafusosExtremidadesInferiores_section__B_3_2',
        q3: 'ParafusosExtremidadesInferiores_section__B_3_3',
      }
    },
    {
      title: 'Parafusos extremidades superiores',
      options: {
        q1: 'ParafusosExtremidadesSuperiores_section__B_3_1',
        q2: 'ParafusosExtremidadesSuperiores_section__B_3_2',
        q3: 'ParafusosExtremidadesSuperiores_section__B_3_3',
      }
    },
    {
      title: 'Pinos intramedulares umeral',
      options: {
        q1: 'PinosIntramedularesUmeral_section__B_3_1',
        q2: 'PinosIntramedularesUmeral_section__B_3_2',
        q3: 'PinosIntramedularesUmeral_section__B_3_3',
      }
    },
    {
      title: 'Pinos intramedulares acetabulares',
      options: {
        q1: 'PinosIntramedularesAcetabulares_section__B_3_1',
        q2: 'PinosIntramedularesAcetabulares_section__B_3_2',
        q3: 'PinosIntramedularesAcetabulares_section__B_3_3',
      }
    },
    {
      title: 'Pino intramedular femoral',
      options: {
        q1: 'PinoIntramedularFemoral_section__B_3_1',
        q2: 'PinoIntramedularFemoral_section__B_3_2',
        q3: 'PinoIntramedularFemoral_section__B_3_3',
      }
    },
    {
      title: 'Pinos intramedulares tibiais',
      options: {
        q1: 'PinosIntramedularesTibiais_section__B_3_1',
        q2: 'PinosIntramedularesTibiais_section__B_3_2',
        q3: 'PinosIntramedularesTibiais_section__B_3_3',
      }
    },
    {
      title: 'Parafusos pequenos e cânulados',
      options: {
        q1: 'ParafusosPequenosCanulados_section__B_3_1',
        q2: 'ParafusosPequenosCanulados_section__B_3_2',
        q3: 'ParafusosPequenosCanulados_section__B_3_3',
      }
    },
    {
      title: 'Parafusos grandes e canulados',
      options: {
        q1: 'ParafusosGrandescanulados_section__B_3_1',
        q2: 'ParafusosGrandescanulados_section__B_3_2',
        q3: 'ParafusosGrandescanulados_section__B_3_3',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'GrandesFixaCoesExternas_section__B_3_1',
        q2: 'GrandesFixaCoesExternas_section__B_3_2',
        q3: 'GrandesFixaCoesExternas_section__B_3_3',
      }
    },
    {
      title: 'Grandes Fixações Externas',
      options: {
        q1: 'GrandesFixaCoesExternas_section__B_3_1',
        q2: 'GrandesFixaCoesExternas_section__B_3_2',
        q3: 'GrandesFixaCoesExternas_section__B_3_3',
      }
    },
    {
      title: 'Fixações externas médias',
      options: {
        q1: 'FixacoesExternasMedias_section__B_3_1',
        q2: 'FixacoesExternasMedias_section__B_3_2',
        q3: 'FixacoesExternasMedias_section__B_3_3',
      }
    },
    {
      title: 'Pequenas Fixações Externas',
      options: {
        q1: 'PequenasFixaCoesExternas_section__B_3_1',
        q2: 'PequenasFixaCoesExternas_section__B_3_2',
        q3: 'PequenasFixaCoesExternas_section__B_3_3',
      }
    },
    {
      title: 'Mini Fixações Externas',
      options: {
        q1: 'MiniFixacoesExternas_section__B_3_1',
        q2: 'MiniFixacoesExternas_section__B_3_2',
        q3: 'MiniFixacoesExternas_section__B_3_3',
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
                  <td className=" w-1/12 border border-slate-300" key={row.title}>{row.title}</td>
                  <td className=" w-1/12 border border-slate-300">
                    <div className="justify-center w-full flex">
                      <input type="checkbox" id="" {...register(`${row.options.q1}`)} />
                    </div>
                  </td>
                  <td className="  w-2/12 border border-slate-300"><InputText {...register(`${row.options.q2}`)} /></td>
                  <td className="  w-2/12  border border-slate-300"><InputText {...register(`${row.options.q3}`)} /></td>
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
