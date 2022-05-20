import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { InputText } from "../components/formComponents/inputText";

export default function Step13() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step14");
  }


  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h3>11.	What trends do you anticipate seen the purchase of these trauma-related products I your facility over the next 5 years?</h3>
          <h4>a.	What drivers explain these trends</h4>
          <h3>12.	What is the purchasing process for introducing these products to the hospital?</h3>
          <h4>a.	What is your role (if any) do you have in ensuring certain products are available at your facility?</h4>
          <h4>b.	Is there any evaluation process to identify and test new products?</h4>
          <h4>c.	Is there an expectation that the manufacturer provide training prior to introducing a new product?</h4>
          <h4>d.	Which distributors or brands have approached your hospital for these types of products?</h4>

          <InputText label="Plates & Screws" />
          <InputText label="Nails" />
          <InputText label="Cannulated screws" />
          <InputText label="External Fixations" />

          <h4>e.	What would make you consider a change of supplier?</h4>

          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
