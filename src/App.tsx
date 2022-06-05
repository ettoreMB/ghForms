import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Step1 } from "./distribuidores/step1";
import { Result } from "./distribuidores/result";
import { Step2 } from "./distribuidores/step2";
import { Step3 } from "./distribuidores/step3";
import { Step4 } from "./distribuidores/step4";
import { Step5 } from "./distribuidores/step5";
import { Step6 } from "./distribuidores/step6";
import { Step7 } from "./distribuidores/step7";
import { Step8 } from "./distribuidores/step8";
import { Step9 } from "./distribuidores/step9";

import MedicoTraumaStep1 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep1';
import MedicoTraumaStep2 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep2';
import MedicoTraumaStep3 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep3';
import MedicoTraumaStep4 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep4';
import MedicoTraumaStep5 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep5';
import MedicoTraumaStep6 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep6';
import MedicoTraumaStep7 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep7';
import MedicoTraumaStep8 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep8';
import MedicoTraumaStep9 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep9';
import MedicoTraumaStep10 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep10';
import MedicoTraumaStep11 from './medicos/pesquisaMedicosTrauma/MedicoTraumaStep11';
import MedicoTraumaStepFinal from './medicos/pesquisaMedicosTrauma/MedicoTraumaStepFinal';

import HospitalTraumaStep1 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep1";
import HospitalTraumaStep2 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep2";
import HospitalTraumastep3 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep3";
import HospitalTraumaStep4 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep4";
import HospitalTraumaStep5 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep5";
import HospitalTraumaStep6 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep6";
import HospitalTraumaStep7 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep7";
import HospitalTraumaStep8 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep8";
import HospitalTraumaStep9 from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStep9";
import HospitalTraumaStepFinal from "./hospitais/pesquisaHopitaisTrauma.tsx/HospitalTraumaStepFinal";

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
        <Route path="/medicos_trauma/stepFinal" element={<MedicoTraumaStepFinal />} />
        {/* Hospital Routes */}
        <Route path="/hospital_trauma/" element={<HospitalTraumaStep1 />} />
        <Route path="/hospital_trauma/step2" element={<HospitalTraumaStep2 />} />
        <Route path="/hospital_trauma/step3" element={<HospitalTraumastep3 />} />
        <Route path="/hospital_trauma/step4" element={<HospitalTraumaStep4 />} />
        <Route path="/hospital_trauma/step5" element={<HospitalTraumaStep5 />} />
        <Route path="/hospital_trauma/step6" element={<HospitalTraumaStep6 />} />
        <Route path="/hospital_trauma/step7" element={<HospitalTraumaStep7 />} />
        <Route path="/hospital_trauma/step8" element={<HospitalTraumaStep8 />} />
        <Route path="/hospital_trauma/step9" element={<HospitalTraumaStep9 />} />
        <Route path="/hospital_trauma/stepfinal" element={<HospitalTraumaStepFinal />} />
      </Routes>
    </Router>
  )

}

export default App
