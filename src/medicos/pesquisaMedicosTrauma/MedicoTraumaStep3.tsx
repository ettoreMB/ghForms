import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";
import { getDataFromStorage } from "../../utils/getDataFromStorage";

export default function step3() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const values = getDataFromStorage();
  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step4");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>1. Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>

          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={3} colSpan={1} >Procedimentos</th>
                <th rowSpan={3} colSpan={1}>Produtos Utilizados</th>
              </tr>
            </thead>
            <tbody>

              {questions.map(row => (
                <tr key={row.title}>
                  <td  >
                    <input className="mx-2 sm:text-sm" type="checkbox" defaultChecked={values?.data[`questao_1_${transformTitleToKeyName(row.title)}`]} {...register(`questao_1_${transformTitleToKeyName(row.title)}`)} />
                    {row.title}
                  </td>
                  <td >
                    {row.products.map(product => (
                      <span className=" p-1 flex flex-row border-b" key={product}>{product}</span>
                    ))}
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
          <NextStepButton step={1} totalSteps={8} />
        </form>
      </div>
    </>
  )
}
