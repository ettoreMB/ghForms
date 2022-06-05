import { GlobalState, useStateMachine } from "little-state-machine";
import { updateAction } from "../utils/updateAction";


export const Result = () => {
  const { state } = useStateMachine({ updateAction });

  return (
    <>
      <div className="container">
      </div>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>

    </>
  );
};


