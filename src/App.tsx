import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Step1 } from "./steps/step1";
import { Result } from "./steps/result";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";
import { Step6 } from "./steps/step6";
import { Step7 } from "./steps/step7";
import { Step8 } from "./steps/step8";
import { Step9 } from "./steps/step9";

import { MedicoTraumaStep1 } from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep1'



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
        <Route path="/results" element={<Result />} />
        <Route path="/medicos_trauma" element={<MedicoTraumaStep1 />} />
      </Routes>
    </Router>
  )

}

export default App
