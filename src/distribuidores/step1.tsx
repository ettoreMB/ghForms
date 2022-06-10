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
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    await api.post('/contact', data)
    navigate("/step2");
  }
  return (
    <>
      <div className="container">
        <form className="w-max" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <InputText defaultValue={state.data.nome} placeholder='Nome Completo' type={'text'} label={"Nome"}   {...register("nome")} required />
            <div className="flex flex-col  sm:flex-row">
              <InputText defaultValue={state.data.email} placeholder='Seu melhor email' type={'text'} label={"Email"}  {...register("email")} required />
              <InputText placeholder='Telefone' type={'text'} label={"Telefone"}  {...register("telefone")} required />
            </div>
            <InputText defaultValue={state.data.empresa} placeholder='Nome da Instituição' type={'text'} label={"Instituição"}  {...register("empresa")} required />
            <InputText defaultValue={state.data.cargo} placeholder='Sua posição na empresa' type={'text'} label={"Posição"}  {...register("cargo")} required />
          </div>

          <NextStepButton title="Iniciar a pesquisa" />

        </form>

      </div>
    </>
  )
}
