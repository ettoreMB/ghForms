import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step6() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    console.log(data)
    navigate("/step7");
  }



  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">
              Há marcas que você gostaria de vender, mas que não estão disponíveis em seus mercados? Por favor liste conforme sua preferência.
            </h2>
            <textarea {...register("section__B_6")} />
          </div>

          <div>
            <h2 className="question">
              Quais são as principais marcas brasileiras que você conhece?
            </h2>
            <InputText placeholder="Nome das Marcas" {...register("section__B_7")} />
            <div>
              <h3 className="question">Como eles se comparam com marcas fabricadas no exterior nestes procedimentos?</h3>
              <textarea {...register("section__B_7_A")} />
            </div>
            <div>
              <h3 className="question">Quais as tendências que você vê em relação às marcas brasileiras em relação a marcas estrangeiras e importadas? por quê?</h3>
              <textarea {...register("section__B_7_B")} />
            </div>

          </div>

          <NextStepButton title="Próximo Passo" />
        </form>
      </div >
    </>
  )
}
