import { GlobalState, useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";


const Result = () => {
  const { state } = useStateMachine({ updateAction });
  const stateResult: any = { ...state };
  const result = {
    medico: {
      nome: stateResult.data.nome,
      email: stateResult.data.email,
      telefone: stateResult.data.telefone,
    },
  }


  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}

    </>
  );
};

export default Result;
