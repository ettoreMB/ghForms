import { InputText } from "../components/formComponents/inputText";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowArcRight, ArrowDownRight, ArrowRight } from "phosphor-react";

const practiceNameLocationOptions = ['PRIMARY hospital institution', 'Affiliation with PRIVATE Hospitals', 'Private institution where Physician conduct the most procedures']

export default function Step2() {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step3");
  }

  const atLeastOne = () => getValues("practiceNameLocation").length ? true : "Please tell";

  return (
    <>
      <h1>Step2</h1>
      <form action="" className="form-select" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3 className="block text-gray-700  font-bold mb-2" >
            Practice name & location
          </h3>
          <div className="mr-6 flex flex-row mb-10">
            {practiceNameLocationOptions.map((value) => (
              <div className="mr-6 flex flex-row">
                <input type="checkbox" key={value} value={value} {...register("practiceNameLocation", {
                  validate: atLeastOne
                })} />
                <label htmlFor="">{value}</label>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-row mb-10">
            <div className="mr-10 w-full">
              <InputText type="text" label="Position" {...register('position')} required />
            </div>
            <div className="mr-10 w-full">
              <InputText type="text" label={"Clinical Specialty"} {...register('clinicalSpeciality')} />
            </div>
          </div>
        </div>
        <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
          Próximo Passo
          <ArrowRight />
        </button>
      </form>

    </>
  )
}