import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { Dialog } from '@headlessui/react'

import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";
import axios from "axios";

export default function Step9() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    axios.post('http://localhost:3333/results', state)
    navigate("/results");
  }

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Conclusão</h2>
          <div className="mb-10">
            <h3 className="question">11.	Você tem algum comentário ou dúvida sobre o projeto ou entrevista?  </h3>
            <textarea {...register("questao_10")} />
          </div>
          <div>
            <h3 className="question">12.	Há outros especialistas que você considera líderes de pensamento e cujas perspectivas seriam valiosas para nós considerarmos? Deixe o nome e telefone. </h3>
            <div className="flex flex-row">
              <InputText label="Recomendações" placeholder="Ex: Nome, Telefone, Nome, Telefone" {...register("recomendacoes")} />
            </div>
          </div>
          <NextStepButton title="Enviar Respostas" />
        </form>
      </div >
    </>
  )
}
