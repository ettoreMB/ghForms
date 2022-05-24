import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step9() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/results");
  }

  return (
    <>
      <div className="container">
        <form className="form-select" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Conclusão</h2>
          <div className="mb-10">
            <h3 className="question">11.	Você tem algum comentário ou dúvida sobre o projeto ou entrevista?  </h3>
            <textarea />
          </div>
          <div>
            <h3 className="question">12.	Há outros especialistas que você considera líderes de pensamento e cujas perspectivas seriam valiosas para nós considerarmos? Deixe o nome e telefone. </h3>
            <div className="flex flex-row">
              <InputText label="Recomendações" placeholder="Ex:Nome, Telefone, Nome, Telefone" />
            </div>
          </div>

          <NextStepButton />
        </form>
      </div >
    </>
  )
}
