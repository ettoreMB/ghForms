import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";

export default function Step7() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step8");
  }

  const options = [
    'We are a leader in Trauma surgery procedures and conduct more than the average hospital in our country.',
    'We are on par with the national average of trauma surgery procedures being conducted.',
    'We are a low volume institution and conduct fewer trauma surgery procedures than the average hospital in our country.',
  ]

  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-6 font-bold">Please indicate which product categories are you familiar with and comfortable to speak about:</h2>
          <h2>Which of the following statements best describes your institution: </h2>

          <div className="mb-10">
            {options.map((option) => (
              <div className="ml-4">
                <input type="checkbox" value={option} {...register('procedureVolumesShare')} />
                <label htmlFor="">{option}</label>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2>2.	How many trauma surgery procedures does your institution currently conduct per month?</h2>
            <InputText {...register('procedureVolumesShareQuestion2')} />
          </div>

          <div className="mb-10">
            <h2>3.	How many trauma surgery procedures does your institution currently conduct per month?</h2>
            <InputText {...register('procedureVolumesShareQuestion3')} />
          </div>

          <div className="mb-10">
            <h2>4.How would you assess expected procedure volumes in 2022 relative to 20219 (pre-COVID) levels?</h2>
            <h3>•	If lower than pre-COVID levels:</h3>
            <h4>by how much</h4>
            <InputText {...register('procedureVolumesShareQuestion4-1-A')} />
            <h4>o	when do you expect volume to return o pre-pandemic levels? </h4>
            <InputText {...register('procedureVolumesShareQuestion4-1-B')} />
            <h3>If you expect 2022 volumes to be similar to 2019 pre-COVID levels, by when do you expect volumes to exceed pre-COVID levels?</h3>
            <InputText {...register('procedureVolumesShareQuestion4-2')} />
            <h3>If you expect 2022 volumes to be higher, by how much (%)</h3>
            <InputText {...register('procedureVolumesShareQuestion4-3')} />
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
