import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function Step8() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step9");
  }


  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">9.	Existem marcas que você gostaria de usar, mas que não estão disponíveis em sua instalação ou região?</h2>
            <textarea {...register("questao_9")} />
          </div>
          <div>
            <h2 className="question">10. Quais são as principais marcas brasileiras que você conhece?</h2>
            <textarea {...register("questao_10")} />
            <div>
              <h3>Como eles se comparam com marcas fabricadas no exterior nos procedimentos que você conduz?</h3>
              <textarea  {...register("questao_10_1")} />
            </div>
            <div>
              <h3>Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas? Por quê?</h3>
              <textarea  {...register("questao_10_2")} />
            </div>
            <div>
              <h3>Das seguintes marcas, quais você usa?</h3>
              <textarea  {...register("questao_10_3")} />
            </div>
          </div>
          <NextStepButton />
        </form>
      </div >
    </>
  )
}
