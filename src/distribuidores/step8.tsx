import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export function Step8() {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>7.	Quais tendências você prevê na compra/venda desses produtos relacionados ao trauma os próximos 5 anos? Que motivos explicam essas tendencias?</h2>
            <textarea placeholder="Resposta" defaultValue={state.data.questao_7}{...register("questao_7")} />
          </div>
          <div >
            <h2>8.	Qual é o processo de compra para a introdução desses produtos em hospital privado?</h2>
            <textarea placeholder="Resposta" defaultValue={state.data.questao_8} {...register("questao_8")} />
            <div className="pl-4">
              <div className="mb-2">
                <h3>.	Existe algum processo de avaliação para identificar e testar novos produtos?</h3>
                <textarea placeholder="Resposta" defaultValue={state.data.questao_8_1}{...register("questao_8_1")} />
              </div>
              <div className="mb-2">
                <h3>.	Existe uma expectativa de que o fabricante forneça treinamento antes de introduzir um novo produto?</h3>
                <textarea placeholder="Resposta" defaultValue={state.data.questao_8_2} {...register("questao_8_2")} />
              </div>
              <div className="mb-2">
                <h3 className="mb-2">. Quais distribuidores ou marcas você concorre mais pelas vendas desses tipos de produtos para hospitais privados?</h3>
                <InputText type='text' label="Placas e Parafusos" defaultValue={state.data.questao_8_3_1} {...register("questao_8_3_1")} />
                <InputText type='text' label="Pinos" defaultValue={state.data.questao_8_3_2} {...register("questao_8_3_2")} />
                <InputText type='text' label="Parafusos cânulados" defaultValue={state.data.questao_8_3_3} {...register("questao_8_3_3")} />
                <InputText type='text' label="Fixações Externas" defaultValue={state.data.questao_8_3_4} {...register("questao_8_3_4")} />
              </div>
            </div>
            <div>
              <h3>9.	Que termos você normalmente negocia com os hospitais para os produtos acima mencionados? </h3>
              <textarea defaultValue={state.data.questao_9} {...register("questao_9")} />
            </div>
            <div>
              <h3>10. Qual é o processo de compra para a introdução desses produtos as companhias de seguro médico? </h3>
              <textarea defaultValue={state.data.questao_10} {...register("questao_10")} />
            </div>
            <div>
              <h3>• Existe algum processo de avaliação para identificar e testar novos produtos? </h3>
              <textarea defaultValue={state.data.questao_10_1} {...register("questao_10_1")} />
            </div>
            <div>
              <h3>• Existe uma expectativa de que o fabricante forneça treinamento antes de introduzir um novo produto? </h3>
              <textarea defaultValue={state.data.questao_10_2} {...register("questao_10_2")} />
            </div>
          </div>
          <div>
            <h3>• Que termos você normalmente negocia com os seguros de saúde para os produtos acima mencionados?</h3>
            <textarea defaultValue={state.data.questao_10_3} {...register("questao_10_3")} />
          </div>

          <NextStepButton title="Última etapa" />
        </form>
      </div >
    </>
  )
}
