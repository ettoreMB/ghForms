import { InputText } from "../components/formComponents/inputText";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";
import { NextStepButton } from "../components/nextStepButton";
import axios from "axios";
import { api } from "../lib/api";

export function Step1(props: any) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    await api.post('/contact', data)
    navigate("/step2");
  }
  return (
    <>
      <div className="pt-20 sm:p-2 m-auto sm:m-0 break-all">
        <form className=" " onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="mb-6">
            <InputText placeholder='Nome Completo' type={'text'} label={"Nome"}   {...register("nome")} required />
            <div className="flex flex-row flex-wrap">
              <InputText placeholder='Seu melhor email' type={'text'} label={"Email"}  {...register("email")} required />
              <InputText placeholder='colocar mascara' type={'text'} label={"Telefone"}  {...register("telefone")} required />
            </div>
            <InputText placeholder='Nome da Instituição' type={'text'} label={"Instituição"}  {...register("empresa")} required />
            <InputText placeholder='Sua posição na empresa' type={'text'} label={"Posição"}  {...register("cargo")} required />
          </div>

          <NextStepButton title="Iniciar a pesquisa" /> */}
          <h2>Estamos atualizando o sistema, tente mais tarde por favor</h2>
        </form>

      </div>
    </>
  )
}
