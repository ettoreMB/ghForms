import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown } from "phosphor-react";
import { Disclosure } from "@headlessui/react";

import { procedures, ProcedureProps } from "../utils/procedures";
import { InputText } from "../components/formComponents/inputText";
import { NextStepButton } from "../components/nextStepButton";

export default function Step3() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step4");
  }

  const QuadrilPelvisExtremidadesOptions = [
    'Placas & Parafusos para quadril ou pélvis ',
    'Placas e Parafusos extremidades inferiores ',
    'Placas & Parafusos extremidades superiores  '
  ]

  const OmbroQuadrilFêmurTibiaOptions = [
    "Pinos intramedulares umeral",
    "Pinos intramedulares acetabular",
    "Pinos intramedulares femoral",
    "Pinos intramedulares tibiais"
  ]

  const OmbroQuadrilPélvisFêmurTíbiaExtremidadesOptions = [
    "Parafusos pequenos e canulados",
    "Parafusos grandes e canulados ",
  ]
  const OmbroFemurTíbiaAntebracomaoOptions = [
    "Grande fixação externa",
    "Fixação externa média ",
    "Pequena fixação externa",
    "Mini fixação externa"
  ]

  return (
    <>
      <div className="container">
        <form className="form-select" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="question">Por favor, indique quais categorias de produtos você está familiarizado e confortável para falar:</h2>
          <div className="px-4">
            <div>
              <h3 className="question">1.	Quadril, Pélvis, Extremidades: </h3>
              <h3>Produtos (e exemplo representativo): </h3>
              <div className="mb-10 mt-2 mx-4">
                {QuadrilPelvisExtremidadesOptions.map((option) => (
                  <div className="ml-4">
                    <input type="checkbox" className="form-checkbox" value={option} {...register('QuadrilPelvisExtremidadesProducts')} />
                    <label className="ml-4">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="question">2.	Ombro, Quadril, Fêmur, Tibia : </h3>
              <h3>Produtos (e exemplo representativo): </h3>
              <div className="mb-10 mt-2 mx-4">
                {OmbroQuadrilFêmurTibiaOptions.map((option) => (
                  <div className="ml-4">
                    <input type="checkbox" className="form-checkbox" value={option} {...register('OmbroQuadrilFêmurTibiaProducts')} />
                    <label className="ml-4">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="question">3.	Ombro, Quadril, Pélvis, Fêmur, Tíbia, Extremidades: </h3>
              <h3>Produtos (e exemplo representativo): </h3>
              <div className="mb-10 mt-2 mx-4">
                {OmbroQuadrilPélvisFêmurTíbiaExtremidadesOptions.map((option) => (
                  <div className="ml-4">
                    <input type="checkbox" className="form-checkbox" value={option} {...register('OmbroQuadrilFêmurTibiaProducts')} />
                    <label className="ml-4">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="question">4.	Ombro, fêmur, tíbia, antebraço, mão: </h3>
              <h3>Produtos (e exemplo representativo): </h3>
              <div className="mb-10 mt-2 mx-4">
                {OmbroFemurTíbiaAntebracomaoOptions.map((option) => (
                  <div className="ml-4">
                    <input type="checkbox" className="form-checkbox" value={option} {...register('OmbroFemurTíbiaAntebracomaoProducts')} />
                    <label className="ml-4">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h2 className="question">Em média, para quantos hospitais você vende em relação aos produtos mencionados acima?</h2>
                <InputText {...register("sectionA_P_1")} />
              </div>
              <div>
                <h2 className="question">Se possível pode dizer entre essas principais regiões:</h2>
                <div className="flex flex-row my-10">
                  <InputText label="SP" placeholder="Quantidade"{...register("sectionA_P_1_SP")} />
                  <InputText label="RJ" placeholder="Quantidade"{...register("sectionA_P_1_RJ")} />
                  <InputText label="MG" placeholder="Quantidade"{...register("sectionA_P_1_MG")} />
                  <InputText label="RECIFE" placeholder="Quantidade"{...register("sectionA_P_1_RECIFE")} />
                  <InputText label="FORTALEZA" placeholder="Quantidade"{...register("sectionA_P_1_FORTALEZA")} />
                  <InputText label="OUTROS" placeholder="Quantidade"{...register("sectionA_P_1_OUTROS")} />
                </div>
              </div>
              <div>
                <h2 className="question">Poderia dividir o volume das vendas entre privado e púbico, de preferência um valor em %:</h2>
                <div className="flex flex-row w-6/12 justify-between">
                  <div className="flex flex-row px-2 mx-2 border-b border-teal-500 mb-2  w-40">
                    <label className="mr-4" htmlFor="">Publico</label>
                    <input placeholder="%" type="number" name="" id="" className="w-14" />
                  </div>
                  <div className="flex flex-row px-2 mx-2 border-b border-teal-500 mb-2 w-40 ">
                    <label className="mr-4">Privado</label>
                    <input placeholder="%" prefix="%" type="number" name="" id="" className="w-14" />
                  </div>
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
