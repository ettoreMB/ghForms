import { useState } from "react";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'

interface ProcedureListProps {
  title: string;
}
interface Procedure {
  title: string;
  description: string;

}
const procedures = [
  {
    title: "FX DE PUNHO",
    description: 'Plates & Screws superior extremities, Small, cannulated screws'
  },
  {
    title: "FX DE COTOVELO",
    description: 'Plates & Screws superior extremities, Small, cannulated screws'
  },
  {
    title: "FX UMERO",
    description: 'Plates & Screws superior extremities, Humeral Intramedullary nails, Small, cannulated screws'
  },
  {
    title: "FX CLAVICULA",
    description: 'Plates & Screws for hip or pelvis, Small, cannulated screws'
  },
  {
    title: "FX METACARPO",
    description: 'Plates & Screws inferior extremities'
  },
  {
    title: "FX DE FALANGE",
    description: 'Plates & Screws superior extremities, Small, cannulated screws'
  },
  {
    title: "FX TROCANTERICA",
    description: 'Plates & Screws for hip or pelvis, Cephalomedular Intramedullary nails, cLarge, cannulated screws'
  },
  {
    title: "FX DIAFISE FEMUR",
    description: 'Plates & Screws inferior extremities, Femoral Intramedullary nails'
  },
  {
    title: "FX FEMUR DISTAL",
    description: 'Plates & Screws inferior extremities, Femoral Intramedullary nails, Large, cannulated screws'
  },
  {
    title: "FX DIAFISE TIBIA",
    description: 'Plates & Screws inferior extremities, Tibial Intramedullary nails'
  },
  {
    title: "FX TIBIA DISTAL",
    description: 'Plates & Screws Small, Cannulated screws'
  },
  {
    title: "FX METATARSO",
    description: 'Plates & Screws inferior extremities, Small, cannulated screws, Large, cannulated screws'
  },
  {
    title: "OSTEOTOMIA QUADRIL",
    description: 'Plates & Screws for hip or pelvis,bLarge, cannulated screws'
  },
  {
    title: "OSTEOTOMIA DE JOELHO",
    description: 'Plates & Screws inferior extremities, Large, cannulated screws'
  },
  {
    title: "ARTRODESE FALANGE",
    description: 'Plates & Screws Superior extremities, Plates & Screws inferior extremities, Small, cannulated screws'
  },
  {
    title: "ARTRODESE DE TORNOZELO",
    description: 'Plates & Screws inferior extremities, Tibial Intramedullary nails, Small, cannulated screws, Large, cannulated screws'
  },
  {
    title: "FX ACETABULO",
    description: 'Plates & Screws for hip or pelvis, Large, cannulated screws'
  },
  {
    title: "ARTRODESE PUNHO",
    description: 'Plates & Screws Superior extremities'
  },
]

export function ProcedureList() {
  return (
    <>
      <Disclosure>
        <Disclosure.Button className="py-2 flex flex-row">
          Procedures
          <ChevronUpIcon className="w-8" />
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          {procedures.map((procedure: Procedure) => (
            <div className="flex flex-row">
              <input type={'checkbox'} />
              <h2>{procedure.title}</h2>
              <span>{procedure.description}</span>
            </div>
          ))}
        </Disclosure.Panel>
      </Disclosure>
    </>
  )
}