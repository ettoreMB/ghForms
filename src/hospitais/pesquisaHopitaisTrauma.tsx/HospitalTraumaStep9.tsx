import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function HospitalTraumaStep9() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step10");
  }

  return (
    <>
      <div className="w-full pt-24 md:pt-24 sm:p-2 m-auto sm:m-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">10 Como os pacientes de trauma normalmente pagam por seus procedimentos?</h2>
            <div className="ml-2 flex flex-row">
              <InputText type={'text'} label="Particular(%)" />
              <InputText type={'text'} label="Coberto pelo SUS(%)" />
              <InputText type={'text'} label="Coberto por seguro médico privado(%)" />
            </div>
          </div>



          <NextStepButton step={7} totalSteps={9} />
        </form>
      </div >
    </>
  )
}
