import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { getDataFromStorage } from "../../utils/getDataFromStorage";

export default function Step4() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const values = getDataFromStorage();
  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/medicos_trauma/step5");
  }

  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2>2. Qual das seguintes declarações descreve melhor sua instituição:</h2>
            <div className="ml-4">
              <input className="form-checkbox" type="checkbox" defaultChecked={values?.data['questao_2_1']} {...register('questao_2_1')} />
              <label className="ml-4">Somos líderes em procedimentos cirúrgicos de trauma e conduzimos mais do que a média hospitalar em nosso país. </label>
            </div>
            <div className="ml-4">
              <input className="form-checkbox" type="checkbox" defaultChecked={values?.data['questao_2_2']} {...register('questao_2_2')} />
              <label className="ml-4">Estamos em igualdade com a média nacional de procedimentos cirúrgicos de trauma que estão sendo realizados.</label>
            </div>
            <div className="ml-4">
              <input className="form-checkbox" type="checkbox" defaultChecked={values?.data['questao_2_3']} {...register('questao_2_3')} />
              <label className="ml-4">Somos uma instituição de baixo volume e realizamos menos procedimentos cirúrgicos de trauma do que o hospital médio em nosso país.</label>
            </div>
          </div>
          <div className="mb-4">
            <h2>3.	 Quantos procedimentos de cirurgia de trauma sua instituição realiza atualmente por mês?</h2>
            <InputText placeholder="Quantidade" type="text" defaultValue={values?.data['questao_3']} {...register('questao_3')} />
          </div>
          <div className="mb-4">
            <h2>4.	Quantos procedimentos de cirurgia de trauma você realiza por mês?</h2>
            <InputText placeholder="Quantidade" type="text" defaultValue={values?.data['questao_4']} {...register('questao_4')} />
          </div>
          <div>
            <div>
              <h2>5.	Como você avaliaria os volumes de procedimentos esperados em 2022 em relação aos níveis de 2019 (pré-COVID)?</h2>
              <InputText placeholder="Resposta" type="text" defaultValue={values?.data['questao_5']} {...register('questao_5')} />
              <div className="pl-6">
                <div>
                  <h3>. Se menor do que os níveis pré-COVID</h3>
                  <div className="pl-4">
                    <h3>Em quantos %?</h3>
                    <InputText type="number" placeholder="%" defaultValue={values?.data['questao_5_1_1']} {...register('questao_5_1_1')} />
                  </div>
                  <div className="pl-4" >
                    <h3>Quando você espera que o volume retorne os níveis pré-pandemias?</h3>
                    <InputText type="text" placeholder="Resposta" defaultValue={values?.data['questao_5_1_2']} {...register('questao_5_1_2')} />
                  </div>
                </div>
                <div>
                  <h3>. Se você espera que em 2022 os volumes sejam semelhantes aos níveis pré-COVID de 2019, quando você espera que os volumes excedam os níveis pré-COVID?</h3>
                  <InputText type="text" placeholder="Resposta" defaultValue={values?.data['questao_5_2']} {...register('questao_5_2')} />
                </div>
                <div>
                  <h3>.	Se você espera que em 2022 os volumes sejam maiores, por quantos %?</h3>
                  <InputText type="text" placeholder="Resposta" defaultValue={values?.data['questao_5_3']}  {...register('questao_5_3')} />
                </div>
              </div>
            </div>
          </div>

          <NextStepButton step={2} totalSteps={8} />
        </form>
      </div>
    </>
  )
}
