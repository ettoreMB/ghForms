import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { ArrowDown, ArrowRight } from "phosphor-react";


const rows = [
  'Plates for hip or pelvis ',
  'Plates inferior extremities ',
  'Plates superior extremities ',
  'Screws for hip or pelvis ',
  'Screws inferior extremities ',
  'Screws superior extremities ',
  'Humeral Intramedullary nails',
  'Cephalomedular Intramedullary nails',
  'Femoral Intramedullary',
  'Tibial Intramedullary nails',
  'small, cannulated screws',
  'Large, cannulated screws',
]

export default function Step11() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data: any) => {
    actions.updateAction(data);
    navigate("/step12");
  }


  return (
    <>
      <div className="flex flex-col mb-10">
        <h2 className="text-center">Terceiro Passo</h2>
        <form className="w-full max-w p-10 form-select" onSubmit={handleSubmit(onSubmit)}>
          <h3>7. Key product features for the most frequent trauma procedures performed:</h3>
          <h4>a.	What is the top brand used for each product type? </h4>
          <h4>b.	Are you aware of the price your facility pays for medical devices? </h4>

          <table>
            <thead>
              <tr>
                <th>Types</th>
                <th>Purchase Price</th>
                <th>Affordability (Cost)</th>
                <th>Quality | High clinical performance</th>
                <th>Availability of products / inventory</th>
                <th>Support and training by manufacturer for use</th>
                <th>Ability to use products for other types of procedures</th>
                <th>Other (please specify): </th>
              </tr>
            </thead>
            <tbody>


              {rows.map(row => (
                <tr>
                  <td>
                    {row}
                  </td>
                  <td> <input type="text" className="border-2 border-black w-10" /> </td>
                  <td><input type="text" className="border-2 border-black w-10" /></td>
                  <td><input type="text" className="border-2 border-black w-10" /></td>
                  <td><input type="text" className="border-2 border-black w-10" /></td>
                  <td><input type="text" className="border-2 border-black w-10" /></td>
                  <td><input type="text" className="border-2 border-black w-10" /></td>
                  <td><input type="text" className="border-2 border-black w-20" /></td>
                </tr>
              ))}


            </tbody>
          </table>
          <button type="submit" className="w-full  bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex flex-row">
            Próximo Passo
            <ArrowRight />
          </button>
        </form>
      </div>
    </>
  )
}
