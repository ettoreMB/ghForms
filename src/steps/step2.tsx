import { InputText } from "../components/formComponents/inputText";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { NextStepButton } from "../components/nextStepButton";


const practiceNameLocationOptions = ['PRIMARY hospital institution', 'Affiliation with PRIVATE Hospitals', 'Private institution where Physician conduct the most procedures']

export default function Step2() {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    console.log(data)
    navigate("/step3");
  }

  const atLeastOne = () => getValues("practiceNameLocation").length ? true : "Please tell";

  return (
    <div className="container">
      <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="question tex-center p-10" >
            Introdução
            Estamos realizando um estudo para uma empresa de dispositivos médicos em vários países da América Latina para entender melhor as atuais oportunidades de mercado para dispositivos cirúrgicos em procedimentos de Trauma.  Como um líder de pensamento reconhecido no campo, gostaríamos de discutir alguns pontos de interesse. Todas as informações são mantidas confidenciais e não atribuídas – serão usadas apenas de forma agregada e anonimizada.
          </h2>

        </div>
        <NextStepButton />
      </form>
    </div>
  )
}