import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function HospitalTraumaStep9() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/stepFinal");
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>10 Como os pacientes de trauma normalmente pagam por seus procedimentos?</h2>
            <div className="ml-2 flex flex-col sm:flex-row">
              <InputText type={'text'} placeholder="%" label="Particular(%)" {...register('questao_10_particular')} />
              <InputText type={'text'} placeholder="%" label="Coberto pelo SUS(%)" {...register('questao_10_sus')} />
              <InputText type={'text'} placeholder="%" label="Coberto por seguro médico privado(%)" {...register('questao_10_seguro_privado')} />
            </div>
          </div>
          <NextStepButton step={7} totalSteps={8} />
        </form>
      </div >
    </>
  )
}
