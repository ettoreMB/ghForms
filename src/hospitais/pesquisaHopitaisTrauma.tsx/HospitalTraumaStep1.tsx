import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { api } from "../../lib/api";

export default function HospitalTraumaStep1() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    await api.post('/contact', data)
    navigate("/hospital_trauma/step2");
  }
  return (
    <>
      <div className="pt-20 sm:p-2 m-auto sm:m-0 break-all">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 w-full">
            <InputText placeholder='Nome Completo' type={'text'} label={"Nome"}   {...register("nome")} required />
            <div className="flex flex-row flex-wrap">
              <InputText placeholder='Seu melhor email' type={'text'} label={"Email"}  {...register("email")} required />
              <InputText placeholder='colocar mascara' type={'text'} label={"Telefone"}  {...register("telefone")} required />
            </div>
            <InputText placeholder='Nome da Instituição' type={'text'} label={"Instituição"}  {...register("empresa")} required />
            <InputText placeholder='Sua posição na empresa' type={'text'} label={"Posição"}  {...register("cargo")} required />
          </div>

          <NextStepButton />
          {/* <h2>Estamos atualizando o sistema em breve voltaremos </h2> */}
        </form>
      </div>
    </>
  )
}
