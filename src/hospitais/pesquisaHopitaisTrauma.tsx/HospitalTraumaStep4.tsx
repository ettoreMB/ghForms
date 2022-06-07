import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../../utils/updateAction";
import { NextStepButton } from "../../components/nextStepButton";

export default function HospitalTraumaStep4() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/hospital_trauma/step5");
  }

  return (
    <>
      <div className="container">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2>2. Qual das seguintes declarações descreve melhor sua instituição:</h2>
            <div className="flex flex-col pl-4">
              <div>
                <input className="form-checkbox" type="checkbox" {...register("questao_2_1")} />
                <label className="ml-4">
                  Somos líderes em procedimentos cirúrgicos de trauma e conduzimos mais do que a média hospitalar em nosso país.
                </label>
              </div>
              <div>
                <input className="form-checkbox" type="checkbox" {...register("questao_2_2")} />
                <label className="ml-4">
                  Estamos em  igualdade com a média nacional de procedimentos cirúrgicos de trauma que estão sendo realizados.
                </label>
              </div>
              <div>
                <input className="form-checkbox" type="checkbox" {...register("questao_2_3")} />
                <label className="ml-4">
                  Somos uma instituição de baixo volume e realizamos menos procedimentos cirúrgicos de trauma do que o hospital médio em nosso país.
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2>
              3. Quantos procedimentos de cirurgia de trauma sua instituição realiza atualmente por mês?
            </h2>
            <textarea placeholder="Resposta" {...register('questao_3')}></textarea>
          </div>

          <div className="mb-4" >
            <h2>
              4 .Quantos médicos de trauma (incluindo cirurgiões ortopédicos) atualmente realizam procedimentos de trauma em sua instalação?
            </h2>
            <textarea placeholder="Resposta"{...register('questao_4')}></textarea>
          </div>

          <NextStepButton step={2} totalSteps={8} />
        </form>
      </div>
    </>
  )
}
