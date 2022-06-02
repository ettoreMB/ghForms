import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { api } from "../../lib/api";

export default function MedicoTraumaStep1() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    await api.post('/contact', data)
    navigate("/medicos_trauma/step2");
  }
  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="mb-6 w-full">
            <InputText placeholder='Nome Completo' label={"Nome"}   {...register("nome")} required />
            <div className="flex flex-row flex-wrap">
              <InputText placeholder='Seu melhor email' label={"Email"}  {...register("email")} required />
              <InputText placeholder='colocar mascara' label={"Telefone"}  {...register("telefone")} required />
            </div>
            <InputText placeholder='Nome da Instituição' label={"Instituição"}  {...register("empresa")} required />
            <InputText placeholder='Sua posição na empresa' label={"Posição"}  {...register("cargo")} required />
          </div>

          <NextStepButton /> */}
          <h2>Estamos Fazendo um pequeno ajuste!! Por favor Tente Responder sua pesquisa mais tarde</h2>
        </form>
      </div>
    </>
  )
}
