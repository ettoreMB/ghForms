import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step8() {
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
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="question">7.	Quais tendências você prevê na compra/venda desses produtos relacionados ao trauma os próximos 5 anos? Que motivos explicam essas tendencias?</h2>
            <textarea {...register("questao_7")} />
          </div>
          <div>
            <h2 className="question">9.	Qual é o processo de compra para a introdução desses produtos em hospital privado?</h2>
            <textarea {...register("questao_8")} />
            <div>
              <h3>a.	Existe algum processo de avaliação para identificar e testar novos produtos?</h3>
              <textarea  {...register("questao_8_1")} />
            </div>
            <div>
              <h3>b.	Existe uma expectativa de que o fabricante forneça treinamento antes de introduzir um novo produto?</h3>
              <textarea  {...register("questao_8_2")} />
            </div>
            <div>
              <h3 className="mb-2">c.	Quais distribuidores ou marcas você concorre mais pelas vendas desses tipos de produtos para hospitais privados?</h3>
              <InputText label="Placas e Parafusos"  {...register("questao_8_3_1")} />
              <InputText label="Pinos" {...register("questao_8_3_2")} />
              <InputText label="Parafusos cânulados"  {...register("questao_8_3_3")} />
              <InputText label="Fixações Externas"  {...register("questao_8_3_4")} />
            </div>
            <div>
              <h3 className="question">10.	Que termos você normalmente negocia com os hospitais para os produtos acima mencionados? </h3>
              <textarea {...register("questao_9")} />
            </div>
          </div>

          <NextStepButton />
        </form>
      </div >
    </>
  )
}