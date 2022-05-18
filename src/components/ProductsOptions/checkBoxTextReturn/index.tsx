import { useState } from "react";
import { InputText } from "../../formComponents/inputText";
import { ProcedureList } from "../ProceduresList";

interface CheckBoxTexReturnProps {
  label: string;
}


export function CheckBoxTexReturn({ label }: CheckBoxTexReturnProps) {
  const [checked, setChecked] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked)
  }
  return (
    <div>
      <input type="checkbox" name="" id="" onChange={handleChange} />
      <label htmlFor="">{label}</label>
      {checked && <InputText type="text" placeholder="product name | Brand" />}
    </div>
  )
}