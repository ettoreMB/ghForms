import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";

const questions = [
  {
    title: 'Quadril Pelvis Extremidades',
    options: [
      'Placas e Parafusos para quadril ou pélvis',
      'Placas e Parafusos extremidades inferiores',
      'Placas e Parafusos extremidades superiores',
    ]
  },
  {
    title: 'Ombro Quadril FêmurTibia',
    options: [
      "Pinos intramedulares acetabular",
      "Pinos intramedulares femoral",
      "Pinos intramedulares tibiais",
    ]
  },
  {
    title: 'Ombro Quadril Pélvis Fêmur Tíbia Extremidades',
    options: [
      "Parafusos pequenos e canulados",
      "Parafusos grandes e canulados",
    ]
  },
  {
    title: 'Ombro Femur Tíbia Antebraço mão',
    options: [
      "Pinos intramedulares femoral",
      "Fixação externa média",
      "Pequena fixação externa",
      "Mini fixação externa"
    ]
  }
]

export default function HospitalTraumaStep3() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    // actions.updateAction(data);
    console.log(data)
    // navigate("/hospital_trauma/step4");
  }


  return (
    <>
      <div className=" flex-wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">1. Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>
          <div className="px-4">
            <div className="mb-10 mt-2 mx-4">
              {questions.map((question, questionIndex) => (
                <>
                  <h3 className="question" key={question.title}>{question.title}: </h3>
                  <h3>Produtos (exemplo representativo): </h3>
                  <div className="mb-10 mt-2 mx-4">
                    {
                      Object.values(question.options).map((option) => (
                        < div className="ml-4" >
                          <input
                            className="form-checkbox"
                            type="checkbox"
                            {...register(`questao_1_grupo_${questionIndex + 1}_${transformTitleToKeyName(option)}`)}
                          />
                          <label className="ml-4" >{option}</label>
                        </div >
                      ))
                    }
                  </div>
                </>
              ))}
            </div>

          </div>
          <NextStepButton step={1} totalSteps={8} />
        </form>
      </div >
    </>
  )
}
