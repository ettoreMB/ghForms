import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";

export default function HospitalTraumaStep7() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step8");
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>7. Há marcas que você gostaria de comprar, mas que não estão disponíveis na sua região?</h2>
            <textarea placeholder="Resposta" {...register("questao_7")} />
          </div>
          <div>
            <h2>8. Quais são as principais marcas brasileiras que você é agora?</h2>
            <textarea placeholder="Resposta" {...register("questao_8")} />
            <div className="pl-4">
              <div>
                <h3>Como essas marcas se comparam com marcas fabricadas no exterior nos procedimentos que você conduz?</h3>
                <textarea placeholder="Resposta" {...register("questao_8_1")} />
              </div>
              <div>
                <h3>Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas?</h3>
                <textarea placeholder="Resposta" {...register("questao_8_2")} />
              </div>
              <div>
                <h3>por quê?</h3>
                <textarea placeholder="Resposta" {...register("questao_8_3")} />
              </div>
            </div>
          </div>
          <NextStepButton step={5} totalSteps={8} />
        </form>
      </div >
    </>
  )
}
