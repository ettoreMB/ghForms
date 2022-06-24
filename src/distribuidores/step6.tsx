import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";

import { NextStepButton } from "../components/nextStepButton";
import { question_brasilian_products } from "../utils/optionsData";
import { transformTitleToKeyName } from "../utils/transformTitleToKeyName";
import { InputText } from "../components/formComponents/inputText";

export function Step6() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const valuesInStorage: any = localStorage.getItem("__LSM__");
  const values = JSON.parse(valuesInStorage);
  const onSubmit = (data: any) => {
    actions.updateAction(data);

    navigate("/step7");
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>
              4. Há marcas que você gostaria de vender, mas que não estão disponíveis em seus mercados? Por favor liste conforme sua preferência.
            </h2>
            <textarea placeholder="Resposta" defaultValue={values?.data.questao_4} {...register("questao_4")} />
          </div>

          <div>
            <h2>
             5. Quais são as principais marcas brasileiras que você conhece?
            </h2>
            <textarea placeholder="Nome das Marcas" defaultValue={values?.data.questao_5} {...register("questao_5")} />
            <div className="pl-2">
              <h3>Como eles se comparam com marcas fabricadas no exterior nestes procedimentos?</h3>
              <textarea placeholder="Resposta" defaultValue={values?.data.questao_5_pergunta_1} {...register("questao_5_pergunta_1")} />
            </div>
            <div className="pl-2">
              <h3>Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas? por quê?</h3>
              <textarea placeholder="Resposta" defaultValue={values?.data.questao_5_pergunta_2} {...register("questao_5_pergunta_2")} />
            </div>
            <div className="pl-2">
              <h3>Das seguintes marcas, quais você usa/vende?</h3>
              <textarea placeholder="Resposta" defaultValue={values?.data.questao_5_pergunta_3} {...register("questao_5_pergunta_3")} />
            </div>
            <div className="pl-4">
                <h3>Produtos:</h3>
                <div className="flex flex-row">
                {question_brasilian_products.map(option =>( 
                  <>
                    < div className="ml-4 mb-1" >
                    <label className="mr-1">{option}</label>
                      <input 
                      type="checkbox" 
                      {...register(`questao_5_pergunta_4_${transformTitleToKeyName(option)}`)}
                      className="form-checkbox"  
                      />
                    </div>
                  </>
                  )
                )}
                </div>
                <div className="pl-4 flex flex-row items-center">
                  <h3>Outros: </h3>
                  <InputText type="text"{...register('questao_5_pergunta_4_outros')} />
                </div>
              </div>
          </div>

          <NextStepButton step={4} totalSteps={7} />
        </form>
      </div >
    </>
  )
}
