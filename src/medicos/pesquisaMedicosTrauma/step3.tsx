import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import axios from "axios";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";

export default function Step3() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    navigate("/step4");

  }

  const questions = [
    {
      title: 'Quadril Pelvis Extremidades',
      options: {
        option1: 'Placas e Parafusos para quadril ou pélvis',
        option2: 'Placas e Parafusos extremidades inferiores',
        option3: 'Placas e Parafusos extremidades superiores',
      }
    },
    {
      title: 'Ombro Quadril FêmurTibia',
      options: {
        option1: "Pinos intramedulares acetabular",
        option2: "Pinos intramedulares femoral",
        option3: "Pinos intramedulares tibiais",
      }
    },
    {
      title: 'Ombro Quadril Pélvis Fêmur Tíbia Extremidades',
      options: {
        option1: "Parafusos pequenos e canulados",
        option2: "Parafusos grandes e canulados"
      }
    },
    {
      title: 'Ombro Femur Tíbia Antebraço Mão',
      options: {
        option1: "Pinos intramedulares femoral",
        option2: "Fixação externa média",
        option3: "Pequena fixação externa",
        option4: "Mini fixação externa",
      }
    }
  ]

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>
          <div className="px-4">
            <div>
              <div className="mb-10 mt-2 mx-4">
                {questions.map((question, questionIndex) => (
                  <>
                    <h3 className="question" key={question.title}>{question.title}: </h3>
                    <div className="pl-4">
                      <h3>Produtos (e exemplo representativo): </h3>
                      <div className="mb-10 mt-2 mx-4">
                        {
                          Object.values(question.options).map((option, index) => (
                            < div className="ml-4" >
                              <input className="form-checkbox" type="checkbox"  {...register(`questao_1_grupo_${questionIndex + 1}_${transformTitleToKeyName(option)}`)} />
                              <label className="ml-4" >{option}</label>
                            </div >
                          ))
                        }
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <NextStepButton />
        </form>
      </div >
    </>
  )
}
