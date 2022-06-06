import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { Dialog, Transition } from '@headlessui/react'

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { useState, Fragment } from "react";
import { api } from "../../lib/api";


export default function StepFinal() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const onSubmit = async (data: any) => {
    actions.updateAction(data);
    await api.post('/results_pesquisa_medicos_trauma', state)
    openModal()
  }
  return (
    <>
      <div className="container">
        <form className="form-select max-w-screen-xl" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Conclusão</h2>
          <div className="mb-10">
            <h3 className="question">19. Há outros cirurgiões ou instituições hospitalares no país cujas perspectivas seriam valiosas para nós considerarmos?</h3>
            <InputText {...register("questao_19")} />
          </div>
          <div>
            <h3 className="question">Você tem algum comentário ou dúvida sobre o projeto ou entrevista?</h3>
            <div className="flex flex-row">
              <InputText placeholder="Deixe seu comentário" {...register("comentario")} />
            </div>
          </div>
          <NextStepButton title="Enviar Respostas" />
        </form>
      </div >

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Pesquisa Finalizada Com Sucesso
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Muito Obrigado por sua participação!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full mt-10 bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex items-center justify-center"
                      onClick={() => navigate('/medicos_trauma')}
                    >
                      Finalizar Pesquisa
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


