import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { NextStepButton } from "../../components/nextStepButton";
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";
import { InputText } from "../../components/formComponents/inputText";
import { question_brasilian_products } from "../../utils/optionsData";

export default function Step7() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step8");
  }

  return (
    <>
      <div className="container">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>8.	Existem marcas que você gostaria de usar, mas que não estão disponíveis em sua instalação ou região?</h2>
            <textarea {...register("questao_8")} />
          </div>
          <div>
            <h2>9. Quais são as principais marcas brasileiras que você conhece?</h2>
            <textarea {...register("questao_9")} />
            <div className="pl-4">
              <div>
                <h3>. Como eles se comparam com marcas fabricadas no exterior nos procedimentos que você conduz?</h3>
                <textarea  {...register("questao_9_1")} />
              </div>
              <div>
                <h3>. Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas? Por quê?</h3>
                <textarea  {...register("questao_9_2")} />
              </div>
              <div>
                <h3>. Das seguintes marcas, quais você usa?</h3>
                <textarea  {...register("questao_9_3")} />
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
                      {...register(`questao_9_4_${transformTitleToKeyName(option)}`)}
                      className="form-checkbox"  
                      />
                    </div>
                  </>
                  )
                )}
                </div>
                <div className="pl-4 flex flex-row items-center">
                  <h3>Outros: </h3>
                  <InputText type="text"{...register('questao_9_4_outros')} />
                </div>
              </div>
            </div>
          </div>
          <NextStepButton step={5} totalSteps={8} />
        </form>
      </div >
    </>
  )
}
