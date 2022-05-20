import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";

export default function Step10() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step8");
  }


  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h3>7. Key product features for the most frequent trauma procedures performed:</h3>
          <h4>a.	What is the top brand used for each product type? </h4>
          <h4>b.	Are you aware of the price your facility pays for medical devices? </h4>

          <table>
            <thead>
              <tr>
                <th>Types</th>
                <th>Purchase Price</th>
                <th>Affordability (Cost)</th>
                <th>brand used in your facility</th>
                <th>brand used in your facility</th>
                <th>brand used in your facility</th>
                <th>brand used in your facility</th>
              </tr>
            </thead>
          </table>
          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
