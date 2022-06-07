import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";

export default function Step6() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step7");
  }

  const questions = [
    {
      title: 'FX DE PUNHO',
      products: [
        'Placas e Parafusos extremidades superiores',
        'Parafusos pequenos e cânulados',
        'Pequena fixação externa'
      ]
    },
    {
      title: 'FX DE COTOVELO',
      products: [
        'Placas e Parafusos extremidades superiores',
        'Parafusos pequenos e cânulados',
        'Fixação externa média',
      ]

    },
    {
      title: 'FX UMERO',
      products: [
        'Placas e Parafusos extremidades superiores',
        'Pinos intramedulares umeral',
        'Parafusos pequenos e cânulados'
      ]
    },
    {
      title: 'FX CLAVÍCULA',
      products: [
        'Placas e Parafusos extremidades superiores',
        'Parafusos pequenos e cânulados'
      ]
    },
    {
      title: 'FX METACARPO',
      products: [
        'Placas e Parafusos extremidades superiores',
        'Mini fixação externa'
      ]
    },
    {
      title: 'FX DE FALANGE',
      products: [
        'Placas e Parafusos extremidades superiores',
        'Parafusos pequenos e cânulados',
        'Mini fixação externa'
      ]
    },
    {
      title: 'FX TROCANTERICA',
      products: [
        'Placas e parafusos para quadril ou pélvis',
        'Pinos intramedulares acetabular',
        'Parafusos grandes e canulados',
        'Grande fixação externa'
      ]
    },
    {
      title: 'FX DIAFISE FEMUR',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Pinos intramedulares femoral',
        'Grande fixação externa'
      ]


    },
    {
      title: 'FX FEMUR DISTAL',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Pinos intramedulares femoral',
        'Parafusos grandes e canulados',
        'Grande fixação externa'
      ]
    },
    {
      title: 'FX TIBIA PROXIMAL',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Pinos intramedulares tibial',
        'Parafusos pequenos e cânulados',
        'Parafusos grandes e canulados',
        'Grande fixação externa'
      ]
    },
    {
      title: 'FX DIAFISE TIBIAL',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Pinos intramedulares tibial',
        'Grande fixação externa',
      ]
    },
    {
      title: 'FX TIBIA DISTAL',
      products: [
        'Placas e Parafusos',
        'Parafusos pequenos e canulados',
        'Fixação externa média',
      ]
    },
    {
      title: 'FX METATARSO',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Parafusos pequenos e cânulados',
        'Parafusos grandes e canulados',
      ]
    },
    {
      title: 'OSTEOTOMIA QUADRIL',
      products: [
        'Placas e parafusos para quadril ou pélvis',
        'Parafusos grandes e canulados',
      ]
    },
    {
      title: 'OSTEOTOMIA DE JOELHO',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Parafusos grandes e canulados'
      ]
    },
    {
      title: 'ARTRODESE FALANGE',
      products: [
        'Placas e Parafusos Extremidades Superiores',
        'Placas e Parafusos extremidades inferiores',
        'Parafusos pequenos e cânulados',
      ]
    },
    {
      title: 'ARTRODESE DE TORNOZELO',
      products: [
        'Placas e Parafusos extremidades inferiores',
        'Pinos intramedulares tibial',
        'Parafusos pequenos e cânulados',
        'Parafusos grandes e canulados',
      ]
    },
    {
      title: 'FX ACETABULO',
      products: [
        'Placas e parafusos para quadril ou pélvis',
        'Parafusos grandes e canulados',
      ]
    },
    {
      title: 'ARTRODESE PUNHO',
      products: [
        'Placas e Parafusos Extremidades Superiores',
      ]
    },

  ]

  return (
    <>
      <div className="container">
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <h2>7. Quais produtos e marcas você usa atualmente para procedimentos de Trauma?</h2>

          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1}>Procedimentos</th>
                <th rowSpan={3} colSpan={1} >Produtos Utilizados</th>
                <th rowSpan={3} colSpan={1} >Marcas disponíveis para uso em sua instalação</th>
                <th rowSpan={3} colSpan={1} className="">Marca preferida? Por que?</th>
              </tr>
            </thead>
            <tbody>
              {questions.map(row => (
                <tr key={row.title}>
                  <td className="text-center" >
                    <input className="mx-2" type="checkbox" {...register(`questao_7_${transformTitleToKeyName(row.title)}`)} />
                    {row.title}
                  </td>
                  <td className="">
                    {row.products.map(product => (
                      <span className="p-2 flex flex-row " key={product}>{product}</span>
                    ))}
                  </td>
                  <td><textarea placeholder="Resposta" {...register(`questao_7_${transformTitleToKeyName(row.title)}_1`)} ></textarea></td>
                  <td><textarea placeholder="Resposta" {...register(`questao_7_${transformTitleToKeyName(row.title)}_2`)} ></textarea></td>
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
