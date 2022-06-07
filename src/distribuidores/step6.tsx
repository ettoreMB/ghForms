import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";

import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export function Step6() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);

    navigate("/step7");
  }

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>
              Há marcas que você gostaria de vender, mas que não estão disponíveis em seus mercados? Por favor liste conforme sua preferência.
            </h2>
            <textarea placeholder="Resposta" {...register("questao_4")} />
          </div>

          <div>
            <h2>
              Quais são as principais marcas brasileiras que você conhece?
            </h2>
            <textarea placeholder="Nome das Marcas" {...register("questao_5")} />
            <div>
              <h3>Como eles se comparam com marcas fabricadas no exterior nestes procedimentos?</h3>
              <textarea placeholder="Resposta" {...register("questao_5_pergunta_1")} />
            </div>
            <div>
              <h3>Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas? por quê?</h3>
              <textarea placeholder="Resposta" {...register("questao_5_pergunta_2")} />
            </div>
            <div>
              <h3>Das seguintes marcas, quais você usa/vende??</h3>
              <textarea placeholder="Resposta" {...register("questao_5_pergunta_3")} />
            </div>

          </div>

          <NextStepButton step={4} totalSteps={7} />
        </form>
      </div >
    </>
  )
}
