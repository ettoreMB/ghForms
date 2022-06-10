import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";
import axios from "axios";

export function Step3() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const valuesInStorage: any = localStorage.getItem("__LSM__");
  const values = JSON.parse(valuesInStorage);

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    navigate("/step4");
  }

  const questions = [
    {
      title: 'Quadril, Pelvis e Extremidades',
      value: 'QuadrilPelvisExtremidades',
      options: {
        option1: 'Placas e Parafusos para quadril ou pélvis',
        option2: 'Placas e Parafusos extremidades inferiores',
        option3: 'Placas e Parafusos extremidades superiores',
      }
    },
    {
      title: 'Ombro Quadril Fêmur Tibia',
      value: 'OmbroQuadrilFêmurTibia',
      options: {
        option1: "Pinos intramedulares acetabular",
        option2: "Pinos intramedulares femoral",
        option3: "Pinos intramedulares tibiais",
      }
    },
    {
      title: 'Ombro, Quadril, Pélvis, Fêmur, Tíbia e Extremidades',
      value: 'OmbroQuadrilPélvisFêmurTíbiaExtremidades',
      options: {
        option1: "Parafusos pequenos e canulados",
        option2: "Parafusos grandes e canulados",
      }
    },
    {
      title: 'Ombro, Femur, Tíbia, Antebraço e Mão',
      value: 'OmbroFemurTíbiaAntebracomao',
      options: {
        option1: "Pinos intramedulares femoral",
        option2: "Fixação externa média",
        option3: "Pequena fixação externa",
        option4: "Mini fixação externa"
      }
    }
  ]
  // questao1__grupo_1_optionNome
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>
          <div className="">
            <div>

              <div className="mb-10 mt-2 mx-4">
                {questions.map((question, questionIndex) => (
                  <>
                    <h3 className="question" key={question.title}>{question.title}: </h3>
                    <h3>Produtos (e exemplo representativo): </h3>
                    <div className="mb-10 mt-2 mx-4">
                      {
                        Object.values(question.options).map((option, index) => (
                          < div className="ml-4" key={index}>
                            <input
                              className="form-checkbox"
                              type="checkbox"
                              defaultChecked={values.data[`questao_1_grupo_${questionIndex + 1}_${option.replace(/\s/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`]}
                              {...register(`questao_1_grupo_${questionIndex + 1}_${option.replace(/\s/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`)} />
                            <label className="ml-4" >{option}</label>
                          </div >
                        ))
                      }
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h2 className="">Em média, para quantos hospitais você vende em relação aos produtos mencionados acima?</h2>
                <InputText defaultValue={values.data.questao_1_pergunta_2} type="number" {...register("questao_1_pergunta_2")} />
              </div>
              <div>
                <h2 className="">Se possível pode dizer entre essas principais regiões:</h2>
                <div className="flex flex-col my-10 sm:flex-row ">
                  <InputText defaultValue={values.data.questao_1_pergunta_3_SP} label="São Paulo" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_SP")} />
                  <InputText defaultValue={values.data.questao_1_pergunta_3_RJ} label="Rio de Janeiro" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_RJ")} />
                  <InputText defaultValue={values.data.questao_1_pergunta_3_MG} label="Minas Gerais" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_MG")} />
                  <InputText defaultValue={values.data.questao_1_pergunta_3_RECIFE} label="Recife" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_RECIFE")} />
                  <InputText defaultValue={values.data.questao_1_pergunta_3_FORTALEZA} label="Fortaleza" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_FORTALEZA")} />
                  <InputText defaultValue={values.data.questao_1_pergunta_3_OUTROS} label="Outros" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_OUTROS")} />
                </div>
              </div>
              <div>
                <h2 className="">Poderia dividir o volume das vendas entre privado e púbico, de preferência um valor em %:</h2>
                <div className="flex flex-col  justify-between sm:flex-row">
                  <InputText label="Publico" placeholder="%" type="number" defaultValue={values.data.questao_1_pergunta_4_qtd_publico} {...register("questao_1_pergunta_4_qtd_publico")} />
                  <InputText label='Privado' placeholder="%" type="number" defaultValue={values.data.questao_1_pergunta_4_qtd_privado} {...register("questao_1_pergunta_4_qtd_privado")} />
                </div>
              </div>
            </div>
          </div>
          <NextStepButton step={1} totalSteps={7} />
        </form>
      </div >
    </>
  )
}
