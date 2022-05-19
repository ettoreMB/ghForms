import { InputText } from "./components/formComponents/inputText";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./steps/step1";
import Result from "./steps/result";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

const products = [
  {
    title: 'Hip, Pelvis, Extremities',
    products: [
      {
        info: "Plates & Screws for hip or pelvis",
        name: ""
      },
      {
        info: "Plates & Screws inferior extremities",
        name: ""
      },
      {
        info: "Plates & Screws superior extremities",
        name: ""
      }
    ]
  },
  {
    title: 'Shoulder, Hip, Femur, Tibia',
    products: [
      {
        info: "Humeral Intramedullary nails",
        name: ""
      },
      {
        info: "Cephalomedular Intramedullary nails ",
        name: ""
      },
      {
        info: "Femoral Intramedullary nails",
        name: ""
      },
      {
        info: "Tibial Intramedullary nails",
        name: ""
      },
    ]
  },
  {
    title: 'Shoulder, Hip, Femur, Tibia',
    products: [
      {
        info: "Small, cannulated screws",
        name: ""
      },
      {
        info: "Large, cannulated screws",
        name: ""
      },
    ]
  },
  {
    title: 'Shoulder, Femur, Tibia, forearm, hand',
    products: [
      {
        info: "Small, cannulated screws",
        name: ""
      },
      {
        info: "Large, cannulated screws ",
        name: ""
      },
    ]
  },
]
createStore({
  data: {}
})

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </Router>
  )

}

export default App
