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

import MedicoTraumaStep1 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep1'
import MedicoTraumaStep2 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep2'
import MedicoTraumaStep3 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep3'
import MedicoTraumaStep4 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep4'
import MedicoTraumaStep5 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep5'
import MedicoTraumaStep6 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep6'
import MedicoTraumaStep7 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep7'
import MedicoTraumaStep8 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep8'
import MedicoTraumaStep9 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep9'
import MedicoTraumaStep10 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep10'
import MedicoTraumaStep11 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep11'
import MedicoTraumaStep12 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep12'
import MedicoTraumaStepFinal from './medicos/pesquisaMedicosTrauma/MedicoTraumaStepFinal'



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
        {/* Medicos Rotues */}
        <Route path="/medicos_trauma" element={<MedicoTraumaStep1 />} />
        <Route path="/medicos_trauma/step2" element={<MedicoTraumaStep2 />} />
        <Route path="/medicos_trauma/step3" element={<MedicoTraumaStep3 />} />
        <Route path="/medicos_trauma/step4" element={<MedicoTraumaStep4 />} />
        <Route path="/medicos_trauma/step5" element={<MedicoTraumaStep5 />} />
        <Route path="/medicos_trauma/step6" element={<MedicoTraumaStep6 />} />
        <Route path="/medicos_trauma/step7" element={<MedicoTraumaStep7 />} />
        <Route path="/medicos_trauma/step8" element={<MedicoTraumaStep8 />} />
        <Route path="/medicos_trauma/step9" element={<MedicoTraumaStep9 />} />
        <Route path="/medicos_trauma/step10" element={<MedicoTraumaStep10 />} />
        <Route path="/medicos_trauma/step11" element={<MedicoTraumaStep11 />} />
        <Route path="/medicos_trauma/step12" element={<MedicoTraumaStep12 />} />
        <Route path="/medicos_trauma/stepFinal" element={<MedicoTraumaStepFinal />} />
      </Routes>
    </Router>
  )

}

export default App
