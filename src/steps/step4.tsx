import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";

export default function Step4() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step5");
  }

  const options = [
    'Humeral Intramedullary nails',
    'Cephalomedular Intramedullary nails',
    'Femoral Intramedullary nails',
    'Tibial Intramedullary nails'
  ]

  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-6 font-bold">Please indicate which product categories are you familiar with and comfortable to speak about:</h2>
          <h2>2.	Shoulder, Hip, Femur, Tibia : </h2>
          <div>
            <h3 className="mb-4">Products (and representative example): </h3>
            <div className="mb-10">
              {options.map((option) => (
                <div className="ml-4">
                  <input type="checkbox" value={option} {...register('shoulderHipFemurTibiaProducts')} />
                  <label htmlFor="">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h3>○	Target specialties: Orthopedic Surgeon, Trauma Surgeon</h3>
            <InputText placeholder="Digite Aqui" {...register('shoulderHipFemurTibiaTarget')} />
          </div>


          <div className="mb-10">
            <Disclosure>
              <Disclosure.Button>
                <span className="flex flex-row p-2 h-10 bg-blue-400 rounded-lg w-full text-center text-white">
                  Procedures
                  <ArrowDown className="mt-1 font-bold" />
                </span>

              </Disclosure.Button>
              <Disclosure.Panel>

                <>
                  {procedures.map((procedure: ProcedureProps) => (
                    <div>
                      <input type="checkbox" id={procedure.title} value={procedure.title} key={procedure.title} {...register("shoulderHipFemurTibiaProcedures")} />
                      <label htmlFor="">{procedure.title}</label>
                    </div>
                  ))}
                </>
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
