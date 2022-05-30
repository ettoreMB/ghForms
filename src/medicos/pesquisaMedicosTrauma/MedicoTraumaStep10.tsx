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
    navigate("/medicos_trauma/step11");
  }

  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className="question">15. Quais as tendências que  você espera que vejam a compra desses produtos relacionados ao trauma em sua instalação nos próximos 5 anos?</h2>
            <textarea {...register("questao_15")} />
            <div className="pl-4">
              <h3>. Que motivos explicam essas tendências?</h3>
              <textarea {...register("questao_15_1")}></textarea>
            </div>
          </div>
          <div>
            <h2 className="question">16. Qual é o processo de compra para a introdução desses produtos ao hospital?</h2>
            <textarea {...register("questao_16")} />
            <div className="pl-4">
              <div>
                <h3 >. Qual é o seu papel (se houver) em garantir que certos produtos estejam disponíveis em sua instalação?</h3>
                <textarea {...register("questao_16_1")}></textarea>
              </div>
              <div>
                <h3>. Existe algum processo de avaliação para identificar e testar novos produtos?</h3>
                <textarea {...register("questao_16_2")}></textarea>
              </div>
              <div>
                <h3>. Existe uma expectativa de que o fabricante forneça treinamento antes de introduzir um novo produto?</h3>
                <textarea {...register("questao_16_3")}></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 className="question">17. Quais distribuidores ou marcas se aproximaram do seu hospital para esses tipos de produtos?</h2>
            <InputText label="Placas e Parafusos" {...register('questao_17_1')} />
            <InputText label="Pinos" {...register('questao_17_2')} />
            <InputText label="Parafusos cânulados" {...register('questao_17_3')} />
            <InputText label="Fixações Externas" {...register('questao_17_4')} />
          </div>
          <div>
            <h2 className="question">18. O que faria você considerar uma mudança de fornecedor?</h2>
            <textarea {...register('questao_18')} />
          </div>

          <NextStepButton />
        </form>
      </div >
    </>
  )
}
