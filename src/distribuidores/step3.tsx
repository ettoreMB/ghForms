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
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    navigate("/step4");

  }

  const questions = [
    {
      title: 'QuadrilPelvisExtremidades',
      options: {
        option1: 'Placas e Parafusos para quadril ou pélvis - [LCP / DPS]',
        option2: 'Placas e Parafusos extremidades inferiores - [Varix / Stryker]',
        option3: 'Placas e Parafusos extremidades superiores - [Aptus / Medartis]',
      }
    },
    {
      title: 'OmbroQuadrilFêmurTibia',
      options: {
        option1: "Pinos intramedulares acetabular - [Multilock / DPS]",
        option2: "Pinos intramedulares femoral - [Gama / Stryker]",
        option3: "Pinos intramedulares tibiais - [ZNN - Zimmer Bionet]",
      }
    },
    {
      title: 'OmbroQuadrilPélvisFêmurTíbiaExtremidades',
      options: {
        option1: "Parafusos pequenos e canulados - [Acutrack / Acumed]",
        option2: "Parafusos grandes e canulados - [Acutrack / Acumed]",
      }
    },
    {
      title: 'OmbroFemurTíbiaAntebracomao',
      options: {
        option1: "Pinos intramedulares femoral - [ProCallus / Orthofix]",
        option2: "Fixação externa média - [ LRS / Orthofix]",
        option3: "Pequena fixação externa - [LRS / Orthofix]",
        option4: "Mini fixação externa - [LRS / Orthofix]"
      }
    }
  ]
  // questao1__grupo_1_optionNome
  return (
    <>
      <div className=" flex-wrap">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>
          <div className="px-4">
            <div>

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



            <div>
              <div className="mb-10">
                <h2 className="question">Em média, para quantos hospitais você vende em relação aos produtos mencionados acima?</h2>
                <InputText type="number" {...register("questao_1_pergunta_2")} />
              </div>
              <div>
                <h2 className="question">Se possível pode dizer entre essas principais regiões:</h2>
                <div className="flex flex-row my-10">
                  <InputText label="São Paulo" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_SP")} />
                  <InputText label="Rio de Janeiro" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_RJ")} />
                  <InputText label="Minas Gerais" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_MG")} />
                  <InputText label="Recife" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_RECIFE")} />
                  <InputText label="Fortaleza" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_FORTALEZA")} />
                  <InputText label="Outros" type="number" placeholder="Qtd"{...register("questao_1_pergunta_3_OUTROS")} />
                </div>
              </div>
              <div>
                <h2 className="question">Poderia dividir o volume das vendas entre privado e púbico, de preferência um valor em %:</h2>
                <div className="flex flex-row w-6/12 justify-between">
                  <InputText label="Publico" placeholder="%" type="number" {...register("questao_1_pergunta_4_qtd_publico")} />
                  <InputText label='Privado' placeholder="%" type="number"  {...register("questao_1_pergunta_4_qtd_privado")} />
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