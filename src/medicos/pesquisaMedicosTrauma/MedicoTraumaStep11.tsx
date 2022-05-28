import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function Step11() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step12");
  }

  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">16 Quais as tendências que  você espera que vejam a compra desses produtos relacionados ao trauma em sua instalação nos próximos 5 anos?</h2>
            <textarea {...register("questao_16")} />
            <h3 className="question">Que motivos explicam essas tendências?</h3>
            <textarea ></textarea>
          </div>
          <div>
            <h2 className="question">17 Qual é o processo de compra para a introdução desses produtos ao hospital?</h2>
            <textarea {...register("questao_17")} />
            <div>
              <div>
                <h3 className="question">Qual é o seu papel (se houver) em garantir que certos produtos estejam disponíveis em sua instalação?</h3>
                <textarea ></textarea>
              </div>
              <div>
                <h3 className="question">Existe algum processo de avaliação para identificar e testar novos produtos?</h3>
                <textarea ></textarea>
              </div>
              <div>
                <h3 className="question">Existe uma expectativa de que o fabricante forneça treinamento antes de introduzir um novo produto?</h3>
                <textarea ></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 className="question">18 Quais distribuidores ou marcas se aproximaram do seu hospital para esses tipos de produtos?</h2>
            <InputText label="Placas e Parafusos" />
            <InputText label="Pinos" />
            <InputText label="Parafusos cânulados" />
            <InputText label="Fixações Externas" />
          </div>
          <div>
            <h2 className="question">19 O que faria você considerar uma mudança de fornecedor?</h2>
            <textarea />
          </div>

          <NextStepButton />
        </form>
      </div >
    </>
  )
}
