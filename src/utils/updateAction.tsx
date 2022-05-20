import { GlobalState } from "little-state-machine";

export default function updateAction(state: GlobalState, payload: any) {
  return {
    ...state,
    data: {
      ...state,
      ...payload
    }
  }
}