export function getDataFromStorage(): any {
  const data = localStorage.getItem("__LSM__");
  return data ? JSON.parse(data) : null;
}