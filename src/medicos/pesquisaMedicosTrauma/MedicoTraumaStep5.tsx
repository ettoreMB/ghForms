import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";

export default function Step5() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step6");
  }

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="question">3.	Qual das seguintes declarações descreve melhor sua instituição:</h2>
            <div className="ml-4">
              <input className="form-checkbox" type="checkbox" name="" id="" />
              <label className="ml-4">Somos líderes em procedimentos cirúrgicos de trauma e conduzimos mais do que a média hospitalar em nosso país. </label>
            </div>
            <div className="ml-4">
              <input className="form-checkbox" type="checkbox" name="" id="" />
              <label className="ml-4">Estamos em igualdade com a média nacional de procedimentos cirúrgicos de trauma que estão sendo realizados.</label>
            </div>
            <div className="ml-4">
              <input className="form-checkbox" type="checkbox" name="" id="" />
              <label className="ml-4">Somos uma instituição de baixo volume e realizamos menos procedimentos cirúrgicos de trauma do que o hospital médio em nosso país.</label>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="question">4.	Quantos procedimentos de cirurgia de trauma sua instituição realiza atualmente por mês?</h2>
            <InputText placeholder="Quantidade" type="number" />
          </div>
          <div className="mb-4">
            <h2 className="question">5.	Quantos procedimentos de cirurgia de trauma você realiza por mês?</h2>
            <InputText placeholder="Quantidade" type="number" />
          </div>
          <div>
            <div>
              <h2 className="question">6.	Como você avaliaria os volumes de procedimentos esperados em 2022 em relação aos níveis de 2019 (pré-COVID)?</h2>
              <InputText placeholder="Resposta" type="text" />
              <div className="pl-6">
                <div className="pl-4">
                  <h3 className="question">a - Se menor do que os níveis pré-COVID</h3>
                  <div className="flex flex-row w-4/12 items-end pl-4" >
                    <h3 className="question">. Em quantos %?</h3>
                    <InputText type="number" placeholder="%" />
                  </div>
                  <div className="pl-4" >
                    <h3 className="question">. Quando você espera que o volume retorne os níveis pré-pandemias?</h3>
                    <InputText type="text" placeholder="Resposta" />
                  </div>
                </div>
                <div>
                  <h3 className="question">b - Se você espera que em 2022 os volumes sejam semelhantes aos níveis pré-COVID de 2019, quando você espera que os volumes excedam os níveis pré-COVID?</h3>
                  <InputText type="text" placeholder="Resposta" />
                </div>
                <div>
                  <h3 className="question">c -	Se você espera que em 2022 os volumes sejam maiores, por quantos %?</h3>
                  <InputText type="text" placeholder="Resposta" />
                </div>
              </div>
            </div>
          </div>

          <NextStepButton />
        </form>
      </div>
    </>
  )
}
