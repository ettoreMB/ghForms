import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";

export default function Step12() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step13");
  }


  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h3>8.	What concerns, if any, do you have about using value / economy products in the procedures discussed earlier?</h3>
          <h3>9.	How does the availability of premium vs. value products influence your decision to conduct trauma procedure at different facilities?</h3>
          <h3>10.	How do trauma patients typically pay for their procedures?</h3>
          <h4>•	Out of pocket (give %)</h4>
          <h4>•	Covered by SUS (give %)</h4>
          <h4>•	Covered by private insurance (give %)</h4>



          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
