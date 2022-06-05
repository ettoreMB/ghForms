import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  destination: string;
}

export function Modal({ destination }: ModalProps) {
  const navigate = useNavigate();
  return (
    <>
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
                  Obrigado por seu tempo e perspectivas.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="w-full mt-10 bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex items-center justify-center"
                  onClick={() => navigate(destination)}
                >
                  Finalizar Pesquisa
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </>
  )
}