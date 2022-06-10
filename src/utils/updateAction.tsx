export function updateAction(state: any, payload: any): any {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload
    }
  }
}