import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { Dialog, Transition } from '@headlessui/react'

import { InputText } from "../../components/formComponents/inputText";
import { NextStepButton } from "../../components/nextStepButton";
import { useState, Fragment } from "react";
import { api } from "../../lib/api";
import { Modal } from "../../components/Modal";


export default function HospitalTraumaStepFinal() {
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
    console.log(state)
    // await api.post('/results_pesquisa_medicos_trauma', state)
    openModal()
  }
  return (
    <>
      <div className="container">
        <form className="form-select w-fit" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className="question">11 Quais tendências você prevê ver a compra/venda desses produtos relacionados ao trauma I sua instalação nos próximos 5 anos?</h2>
            <textarea {...register("questao_11")} />
            <div className="pl-4">
              <h3>. Que motivos explicam essas tendências?</h3>
              <textarea {...register("questao_11_1")}></textarea>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="question">12 Qual é o processo de compra para a introdução desses produtos ao hospital?</h2>
            <textarea {...register("questao_12")} />
            <div className="pl-4">
              <h3>. Qual é o seu papel (se houver) em garantir que certos produtos estejam disponíveis em sua instalação?</h3>
              <textarea {...register("questao_12_1")}></textarea>
            </div>
            <div className="pl-4">
              <h3>. Existe algum processo de avaliação para identificar e testar novos produtos?</h3>
              <textarea {...register("questao_12_2")}></textarea>
            </div>
            <div className="pl-4">
              <h3>. Existe uma expectativa de que o fabricante forneça treinamento antes de introduzir um novo produto?</h3>
              <textarea {...register("questao_12_3")}></textarea>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="question">13 Quais distribuidores ou marcas se aproximaram do seu hospital para esses tipos de produtos?</h2>
            <textarea {...register("questao_11")} />
            <div className="pl-4">
              <h3>. Qual é o processo de vendas para as principais marcas que você compra sobre os produtos abaixo? (por exemplo, vendas diretas? Via distribuidores, etc.)?</h3>
              <div className="ml-4">
                <InputText type={'text'} label="Placa e Parafusos" />
                <InputText type={'text'} label="Unhas" />
                <InputText type={'text'} label="Parafusos e cânulados" />
                <InputText type={'text'} label="Fixações Externas" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="question">
              14 O que faria você considerar uma mudança de fornecedor?
            </h2>
            <textarea {...register("questao_14")} />
          </div>

          <div className="mb-6">
            <h2 className="question">
              15 Que termos você normalmente oferece aos distribuidores ou fabricantes para os produtos acima mencionados?
            </h2>
            <textarea {...register("questao_15")} />
          </div>

          <div className="mb-6">
            <h2 className="question">
              16 . Há outros cirurgiões ou instituições hospitalares no país cujas perspectivas seriam valiosas para nós considerarmos?
            </h2>
            <textarea {...register("questao_16")} />
          </div>

          <div className="mb-6">
            <h2 className="question">
              Você tem algum comentário ou dúvida sobre o projeto ou entrevista?
            </h2>
            <textarea {...register("cometario")} />
          </div>

          <NextStepButton step={8} totalSteps={9} />
        </form>
      </div >

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Modal destination="/hospital_trauma" />
        </Dialog>
      </Transition>
    </>
  )
}


