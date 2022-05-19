import { InputText } from "../components/formComponents/inputText";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowArcRight, ArrowDownRight, ArrowRight } from "phosphor-react";

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
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Primeiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <InputText placeholder='Oi' label={"Nome"}   {...register("nome")} required />
          <InputText label={"Email"}  {...register("email")} required />
          <InputText label={"Telefone"}  {...register("telefone")} required />
          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
