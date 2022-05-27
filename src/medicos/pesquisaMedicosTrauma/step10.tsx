import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function Step10() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step9");
  }

  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">12 Quais são os principais fatores de decisão para a seleção de certos produtos da marca em relação aos outros durante a cirurgia</h2>
            <InputText label="Placas e Parafusos" />
            <InputText label="Pinos" />
            <InputText label="Parafusos cânulados" />
            <InputText label="Parafusos Fixações Externas" />
          </div>
          <div>
            <h2 className="question">13 Quais são as preocupações, se houver, sobre o uso de produtos de valor/economia nos procedimentos discutidos anteriormente?</h2>
            <textarea {...register("questao_13")} />
          </div>
          <div>
            <h2 className="question">14 Como a disponibilidade de produtos premium versus valor influencia sua decisão de realizar o procedimento de trauma em diferentes instalações?</h2>
            <textarea {...register("questao_14")} />
          </div>
          <div>
            <h2 className="question">15 Como os pacientes de trauma normalmente pagam por seus procedimentos?</h2>
            <InputText label="Particular (%)" />
            <InputText label="Coberto pelo SUS (%)" />
            <InputText label="Coberto por seguro privado (%)" />
          </div>

          <NextStepButton />
        </form>
      </div >
    </>
  )
}
