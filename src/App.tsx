import { InputText } from "./components/formComponents/inputText";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./steps/step1";
import Result from "./steps/result";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";
import Step8 from "./steps/step8";
import Step9 from "./steps/step9";
import Step10 from "./steps/step10";
import Step11 from "./steps/step11";
import Step12 from "./steps/step12";
import Step13 from "./steps/step13";
import Step14 from "./steps/step14";

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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
        <Route path="/step8" element={<Step8 />} />
        <Route path="/step9" element={<Step9 />} />
        <Route path="/step10" element={<Step10 />} />
        <Route path="/step11" element={<Step11 />} />
        <Route path="/step12" element={<Step12 />} />
        <Route path="/step13" element={<Step13 />} />
        <Route path="/step14" element={<Step14 />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </Router>
  )

}

export default App
