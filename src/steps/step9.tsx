import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";

export default function Step9() {
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
          <h2 className="mb-6 font-bold">6.	Which products and brands do you currently use for Trauma procedures?  </h2>

          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th className="p-2">PROCEDURE</th>
                <th className="p-2">PRODUCTS</th>
                <th className="p-2">Brands available for use at your facility</th>
                <th className="p-2">Preferred brand? Why?</th>
              </tr>
            </thead>
            <tbody>
              {procedures.map(procedure => (
                <tr key={procedure.title}>
                  <td className="p-2">{procedure.title}</td>
                  <td>{procedure.description}</td>
                  <td><input type="text" className="border-2 border-blue-50" /></td>
                  <td><input type="text" className="border-2 border-blue-50" /></td>
                </tr>
              ))}
            </tbody>
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
