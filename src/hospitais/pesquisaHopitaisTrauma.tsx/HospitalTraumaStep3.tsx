import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";
import { InputText } from "../../components/formComponents/inputText";

const questions = [
  {
    title: 'QuadrilPelvisExtremidades',
    options: [
      'Placas e Parafusos para quadril ou pélvis - [LCP / DPS]',
      'Placas e Parafusos extremidades inferiores - [Varix / Stryker]',
      'Placas e Parafusos extremidades superiores - [Aptus / Medartis]',
    ]
  },
  {
    title: 'OmbroQuadrilFêmurTibia',
    options: [
      "Pinos intramedulares acetabular - [Multilock / DPS]",
      "Pinos intramedulares femoral - [Gama / Stryker]",
      "Pinos intramedulares tibiais - [ZNN - Zimmer Bionet]",
    ]
  },
  {
    title: 'OmbroQuadrilPélvisFêmurTíbiaExtremidades',
    options: [
      "Parafusos pequenos e canulados - [Acutrack / Acumed]",
      "Parafusos grandes e canulados - [Acutrack / Acumed]",
    ]
  },
  {
    title: 'OmbroFemurTíbiaAntebracomao',
    options: [
      "Pinos intramedulares femoral - [ProCallus / Orthofix]",
      "Fixação externa média - [ LRS / Orthofix]",
      "Pequena fixação externa - [LRS / Orthofix]",
      "Mini fixação externa - [LRS / Orthofix]"
    ]
  }
]

export default function HospitalTraumaStep3() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step4");
  }


  return (
    <>
      <div className=" flex-wrap">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>
          <div className="px-4">
            <div className="mb-10 mt-2 mx-4">
              {questions.map((question, questionIndex) => (
                <>
                  <h3 className="question" key={question.title}>{question.title}: </h3>
                  <h3>Produtos (e exemplo representativo): </h3>
                  <div className="mb-10 mt-2 mx-4">
                    {
                      Object.values(question.options).map((option, index) => (
                        < div className="ml-4" >
                          <input className="form-checkbox" type="checkbox"  {...register(`questao_1_grupo_${questionIndex + 1}_${option.replace(/\s/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`)} />
                          <label className="ml-4" >{option}</label>
                        </div >
                      ))
                    }
                  </div>
                </>
              ))}
            </div>

          </div>
          <NextStepButton step={1} totalSteps={7} />
        </form>
      </div >
    </>
  )
}
