import { useState } from "react";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'

interface ProcedureListProps {
  title: string;
}
interface Procedure {
  title: string;
  options: string[];

}
const procedures = [
  {
    title: "FX DE PUNHO",
    options: ['Plates & Screws superior extremities', 'Small, cannulated screws']
  },
  {
    title: "FX DE COTOVELO",
    options: ['Plates & Screws superior extremities', 'Small, cannulated screws']
  },
  {
    title: "FX UMERO",
    options: ['Plates & Screws superior extremities', 'Humeral Intramedullary nails', 'Small, cannulated screws']
  },
  {
    title: "FX CLAVICULA",
    options: ['Plates & Screws for hip or pelvis', 'Small, cannulated screws']
  },
  {
    title: "FX METACARPO",
    options: ['Plates & Screws inferior extremities']
  },
  {
    title: "FX DE FALANGE",
    options: ['Plates & Screws superior extremities', 'Small, cannulated screws']
  },
  {
    title: "FX TROCANTERICA",
    options: ['Plates & Screws for hip or pelvis', 'Cephalomedular Intramedullary nails', 'cLarge, cannulated screws']
  },
  {
    title: "FX DIAFISE FEMUR",
    options: ['Plates & Screws inferior extremities', 'Femoral Intramedullary nails']
  },
  {
    title: "FX FEMUR DISTAL",
    options: ['Plates & Screws inferior extremities', 'Femoral Intramedullary nails', 'Large, cannulated screws']
  },
  {
    title: "FX DIAFISE TIBIA",
    options: ['Plates & Screws inferior extremities', 'Tibial Intramedullary nails',]
  },
  {
    title: "FX TIBIA DISTAL",
    options: ['Plates & Screws Small, Cannulated screws']
  },
  {
    title: "FX METATARSO",
    options: ['Plates & Screws inferior extremities', 'Small, cannulated screws', 'Large, cannulated screws']
  },
  {
    title: "OSTEOTOMIA QUADRIL",
    options: ['Plates & Screws for hip or pelvis', 'bLarge, cannulated screws', 'c']
  },
  {
    title: "OSTEOTOMIA DE JOELHO",
    options: ['Plates & Screws inferior extremities', 'Large, cannulated screws']
  },
  {
    title: "ARTRODESE FALANGE",
    options: ['Plates & Screws Superior extremities', 'Plates & Screws inferior extremities', 'Small, cannulated screws']
  },
  {
    title: "ARTRODESE DE TORNOZELO",
    options: ['Plates & Screws inferior extremities', 'Tibial Intramedullary nails', 'Small, cannulated screws', 'Large, cannulated screws']
  },
  {
    title: "FX ACETABULO",
    options: ['Plates & Screws for hip or pelvis', 'Large, cannulated screws']
  },
  {
    title: "ARTRODESE PUNHO",
    options: ['Plates & Screws Superior extremities']
  },
]

export function ProcedureList() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked);
  }
  return (
    <>
      <Disclosure>
        <Disclosure.Button className="py-2 flex flex-row">
          Procedures
          <ChevronUpIcon className="w-8" />
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          {procedures.map((procedure: Procedure) => (
            <Disclosure>
              <Disclosure.Button className="py-2 flex flex-row">
                {procedure.title}
              </Disclosure.Button>
              <Disclosure.Panel >
                {procedure.options.map((option) => (
                  <div className="flex flex-row">
                    <ul className="px-4">
                      <li>
                        <input type="checkbox" />
                        {option}
                      </li>
                    </ul>

                  </div>
                ))}
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </Disclosure.Panel>
      </Disclosure>
    </>
  )
}