import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";

export default function Step8() {
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
          <h2 className="mb-6 font-bold">5.	To what extent do you expect fluctuations about the following procedures: </h2>

          <div>
            <h3>a.	Expected growth over the next 1-5 years?</h3>
            <span>(Use -/+ percentage to indicate magnitude of growth and/or decrease) </span>
            <span>Price fluctuations over the past 6 months? Why? </span>
          </div>

          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th rowSpan={2} className="p-2">Procedure</th>
                <th rowSpan={3} className="p-2">Expected growth</th>
                <th colSpan={3} className="p-2">Has the cost fluctuated in the past 6 months?</th>
              </tr>
              <tr>
                <th>If yes, by how much (%)?</th>
                <th>If cost has fluctuated, why?</th>
              </tr>
            </thead>
            <tbody>
              {procedures.map(procedure => (
                <tr key={procedure.title}>
                  <td className="p-2">{procedure.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div>
            <>
              {procedures.map((procedure: ProcedureProps) => (
                <div>
                  <input type="checkbox" id={procedure.title} value={procedure.title} key={procedure.title} {...register("hipsPelvisExtremitiesProcedures")} />
                  <label htmlFor="">{procedure.title}</label>
                  <div className="flex flex-col">


                  </div>
                </div>
              ))}
            </>
          </div> */}
          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
