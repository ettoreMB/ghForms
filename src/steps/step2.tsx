import { useNavigate } from 'react-router-dom';
import { NextStepButton } from "../components/nextStepButton";

export function Step2() {
  const navigate = useNavigate();


  return (
    <div className="container">
      <form className="form-select max-w-screen-xl" onSubmit={() => { navigate("/step3") }}>
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