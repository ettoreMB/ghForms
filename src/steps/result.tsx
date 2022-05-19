import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";


const Result = (props: any) => {
  const { state } = useStateMachine({ updateAction });

  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Result;
