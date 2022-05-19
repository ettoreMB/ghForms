import { useState } from "react";
import { InputText } from "../../formComponents/inputText";

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
      <label htmlFor="">{label}</label>
      <input type="checkbox" name="" id="" onChange={handleChange} />
      {checked && <InputText />}
    </div>
  )
}