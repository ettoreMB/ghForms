import { ForwardedRef, forwardRef, ForwardRefRenderFunction } from "react"
import React from "react";
interface InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  onChange?: (event: any) => void;
  defaultValue?: string;

}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }, ref) => {
  return (
    <div className=" flex flex-1 px-2 flex-col mx-2  mb-2">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} className="form-input focus:outline-none placeholder:text-gray-600" ref={ref}  {...rest} />
    </div>
  )
}

export const InputText = forwardRef(InputBase)