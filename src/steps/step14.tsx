import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { InputText } from "../components/formComponents/inputText";

export default function Step14() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/");
  }


  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h3>14. In your estimation, how many doctors of your specialty currently practice in your country?</h3>

          <h3>. Are there other surgeons or hospital institutions in the country whose perspectives would be valuable for us to consider?</h3>
          <h3>Do you have any feedback or questions regarding the project or interview?  </h3>

          <InputText label="Plates & Screws" />
          <InputText label="Nails" />
          <InputText label="Cannulated screws" />
          <InputText label="External Fixations" />

          <h4>e.	What would make you consider a change of supplier?</h4>

          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
