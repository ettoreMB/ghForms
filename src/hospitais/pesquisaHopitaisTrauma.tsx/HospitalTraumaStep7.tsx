import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";
import { getDataFromStorage } from "../../utils/getDataFromStorage";

import  { question_brasilian_products} from '../../utils/optionsData';
import { transformTitleToKeyName } from "../../utils/transformTitleToKeyName";
import { InputText } from "../../components/formComponents/inputText";

export default function HospitalTraumaStep7() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const values = getDataFromStorage();

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step8");
    console.log(data)
  }


  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>7. Há marcas que você gostaria de comprar, mas que não estão disponíveis na sua região?</h2>
            <textarea placeholder="Resposta" defaultValue={values?.data['questao_7']} {...register("questao_7")} />
          </div>
          <div>
            <h2>8. Quais são as principais marcas brasileiras que você conhece?</h2>
            <textarea placeholder="Resposta" defaultValue={values?.data['questao_8']}  {...register("questao_8")} />
            <div className="pl-4">
              <div>
                <h3>Como essas marcas se comparam com marcas fabricadas no exterior nos procedimentos que você conduz?</h3>
                <textarea placeholder="Resposta" defaultValue={values?.data['questao_8_1']}  {...register("questao_8_1")} />
              </div>
              <div>
                <h3>Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas?</h3>
                <textarea placeholder="Resposta" defaultValue={values?.data['questao_8_2']}  {...register("questao_8_2")} />
              </div>
              <div>
                <h3>por quê?</h3>
                <textarea placeholder="Resposta" defaultValue={values?.data['questao_8_3']} {...register("questao_8_3")} />
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
                      {...register(`questao_8_4_${transformTitleToKeyName(option)}`)}
                      className="form-checkbox"  
                      />
                    </div>
                  </>
                  )
                )}
                </div>
                <div className="pl-4 flex flex-row items-center">
                  <h3>Outros: </h3>
                  <InputText type="text"{...register('questao_8_4_outros')} />
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
