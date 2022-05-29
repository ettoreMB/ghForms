import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function Step9() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step10");
  }

  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">11. Quais são os principais fatores de decisão para a seleção de certos produtos da marca em relação aos outros durante a cirurgia</h2>
            <InputText label="Placas e Parafusos" {...register('questao_11_1')} />
            <InputText label="Pinos" {...register('questao_11_2')} />
            <InputText label="Parafusos cânulados" {...register('questao_11_3')} />
            <InputText label="Parafusos Fixações Externas" {...register('questao_11_4')} />
          </div>
          <div>
            <h2 className="question">12. Quais são as preocupações, se houver, sobre o uso de produtos de valor/economia nos procedimentos discutidos anteriormente?</h2>
            <textarea {...register("questao_12")} />
          </div>
          <div>
            <h2 className="question">13. Como a disponibilidade de produtos premium versus valor influencia sua decisão de realizar o procedimento de trauma em diferentes instalações?</h2>
            <textarea {...register("questao_13")} />
          </div>
          <div>
            <h2 className="question">14. Como os pacientes de trauma normalmente pagam por seus procedimentos?</h2>
            <InputText label="Particular (%)" {...register("questao_14_1")} />
            <InputText label="Coberto pelo SUS (%)" {...register("questao_14_2")} />
            <InputText label="Coberto por seguro privado (%)" {...register("questao_14_3")} />
          </div>

          <NextStepButton />
        </form>
      </div >
    </>
  )
}
