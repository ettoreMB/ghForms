import { useNavigate } from 'react-router-dom';
import { NextStepButton } from "../../components/nextStepButton";

export default function Step2() {
  const navigate = useNavigate();


  return (
    <div className="container">
      <form className="form-select max-w-screen-xl" onSubmit={() => { navigate("/medicos_trauma/step3") }}>
        <div>
          <h1 className="text-center text-2xl font-bold tex-center">Introdução</h1>
          <h2 className="question tex-center p-10" >
            Estamos realizando um estudo para uma empresa de dispositivos médicos em vários países da América Latina para entender melhor as atuais oportunidades de mercado para dispositivos cirúrgicos em procedimentos de Trauma. Como um praticante reconhecido e líder de pensamento no campo, gostaríamos de discutir alguns pontos de interesse. Todas as informações são mantidas confidenciais e não atribuídas – serão usadas apenas de forma agregada e anonimizada.
          </h2>
          <h2 className='text-gray-500'>
            Tempo estimado para relização da pesquisa: 15 min
          </h2>
          <h2 className='text-gray-500'>
            Suas respostas só serão enviadas no final da pesquisa na ultima etapa da pesquisa.
          </h2>
        </div>
        <NextStepButton />
      </form >
    </div >
  )
}