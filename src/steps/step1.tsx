import { InputText } from "../components/formComponents/inputText";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowRight } from "phosphor-react";
import { NextStepButton } from "../components/nextStepButton";

export default function Step1(props: any) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step2");
  }
  return (
    <>
      <div className="container">
        <form className="form-select" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 w-full">
            <InputText placeholder='Nome Completo' label={"Nome"}   {...register("nome")} required />
            <div className="flex flex-row flex-wrap">
              <InputText placeholder='Seu melhor email' label={"Email"}  {...register("email")} required />
              <InputText placeholder='colocar mascara' label={"Telefone"}  {...register("telefone")} required />
            </div>


            <InputText placeholder='Nome da Instituição' label={"Instituição"}  {...register("empresa")} required />
            <InputText placeholder='Sua posição na empresa' label={"Posição"}  {...register("cargo")} required />
          </div>

          <NextStepButton />
        </form>
      </div>
    </>
  )
}
