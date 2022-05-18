import React, { useState } from "react";
import { InputText } from "./components/formComponents/inputText";
import { ProductsOptions } from "./components/ProductsOptions";
import { CheckBoxTexReturn } from "./components/ProductsOptions/checkBoxTextReturn";
import { ProcedureList } from "./components/ProductsOptions/ProceduresList";

function App() {

  const getCurrentDate = () => {
    const date = new Intl.DateTimeFormat("pt-BR", { month: '2-digit', day: '2-digit', year: 'numeric' }).format(new Date())
    const [day, month, year] = date.split('/')
    return `${year}-${month}-${day}`
  };

  const today = getCurrentDate()

  const [proceduresCheck, setProceduresCheck] = useState(false)
  const [sliderValue, setSliderValue] = useState(1);
  function handleSliderValuer(event: React.ChangeEvent<HTMLInputElement>) {
    setSliderValue(event.target.valueAsNumber);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setProceduresCheck(event.target.checked)
  }

  return (
    <>
      <form className="w-full max-w p-10 form-select">
        <div className="flex flex-row w-6/12">
          <span>Data da Entrevista</span>
          <InputText type="text" value={today} readOnly={true} />
        </div>

        <section className="mb-4">
          <h2>Demographics</h2>
          <div className="flex flex-row mb-10">
            <InputText placeholder="Nome" type="text" />
            <InputText placeholder="Email" type="email" />
            <InputText placeholder="Telefone" type="text" />
          </div>

          <h3 className="block text-gray-700 text-sm font-bold mb-2" >
            Practice name & location
          </h3>
          <div className="flex flex-row mb-10">
            <div className="mr-6">
              <input type="checkbox" />
              <label htmlFor="">PRIMARY hospital institution:</label>
            </div>
            <div className="mx-6">
              <input type="checkbox" />
              <label htmlFor="">Affiliation with PRIVATE Hospitals</label>
            </div>
            <div className="mx-6">
              <input type="checkbox" />
              <label htmlFor="">Private institution where Physician conduct the most procedures</label>
            </div>
          </div>

          <div className="flex flex-row mb-10">
            <div className="flex flex-col">
              <label htmlFor="">Position</label>
              <InputText type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Position">Clinical Specialty</label>
              <InputText type="text" />
            </div>
          </div>
          <div className="flex flex-col w-6/12 mb-10">
            <h2 >Interviewee ranking</h2>
            <input type="range" min={1} max={10} onChange={handleSliderValuer} />
            <span>{sliderValue}</span>
          </div>
          <div className="flex flex-col w-6/12">
            <label htmlFor="Position">Interview Conducted by</label>
            <InputText type="text" />
          </div>
        </section>
        {/* Demigraphics End*/}

        <section className="mb-4">
          <h2 className="mb-6 font-bold">Please indicate which product categories are you familiar with and comfortable to speak about:</h2>
          <div>
            <div>
              <span>
                <label htmlFor="">1 -Hip, Pelvis, Extremities</label>
                <input type="checkbox" onChange={handleChange} />
              </span>
            </div>
            {proceduresCheck && (<ProductsOptions />)}
            {/* <div>
              <h3>2.	Hip, Pelvis, Extremities </h3>
              <label htmlFor="">Products (and representative example): </label>
              <div>
                <CheckBoxTexReturn label="Humeral Intramedullary nails" />
              </div>
              <div>
                <CheckBoxTexReturn label="Cephalomedular Intramedullary nails" />
              </div>
              <div>
                <CheckBoxTexReturn label="Femoral Intramedullary nails" />
              </div>
              <div>
                <CheckBoxTexReturn label="Tibial Intramedullary nails" />
              </div>
            </div>

            <div>
              <h3>3.Shoulder, Hip, Pelvis, Femur, Tibia, Extremities   </h3>
              <label htmlFor="">Products (and representative example): </label>
              <div>
                <CheckBoxTexReturn label="Small, cannulated screws " />
              </div>
              <div>
                <CheckBoxTexReturn label="Large, cannulated screws  " />
              </div>
            </div>

            <div>
              <h3>4.Shoulder, Femur, Tibia, forearm, hand</h3>
              <label htmlFor="">Products (and representative example): </label>
              <div>
                <CheckBoxTexReturn label="Small, cannulated screws " />
              </div>
              <div>
                <CheckBoxTexReturn label="Large, cannulated screws  " />
              </div>
            </div>
            */}
          </div>
        </section>
      </form>
    </>
  )
}

export default App
