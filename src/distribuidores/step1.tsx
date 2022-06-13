import { InputText } from "../components/formComponents/inputText";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";
import { NextStepButton } from "../components/nextStepButton";
import { api } from "../lib/api";
import { getDataFromStorage } from "../utils/getDataFromStorage";

export function Step1() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const values = getDataFromStorage()

  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    await api.post('/contact', data)
    navigate("/step2");
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <InputText placeholder='Nome Completo' type={'text'} label={"Nome"} defaultValue={values?.data.nome}  {...register("nome")} required />
            <div className="flex flex-col  sm:flex-row">
              <InputText placeholder='Seu melhor email' type={'text'} label={"Email"} defaultValue={values?.data.email} {...register("email")} required />
              <InputText placeholder='Telefone' type={'text'} label={"Telefone"} defaultValue={values?.data.telefone} {...register("telefone")} required />
            </div>
            <InputText placeholder='Nome da Instituição' type={'text'} label={"Instituição"} defaultValue={values?.data.empresa} {...register("empresa")} required />
            <InputText placeholder='Sua posição na empresa' type={'text'} label={"Posição"} defaultValue={values?.data.cargo} {...register("cargo")} required />
          </div>

          <NextStepButton title="Iniciar a pesquisa" />

        </form>

      </div>
    </>
  )
}
