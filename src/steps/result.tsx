import { GlobalState, useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";


const Result = () => {
  const { state } = useStateMachine({ updateAction });
  console.log(state)
  return (
    <>
      <div className="container">
      </div>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>

    </>
  );
};

export default Result;
