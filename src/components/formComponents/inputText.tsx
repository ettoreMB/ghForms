import { ForwardedRef, forwardRef, ForwardRefRenderFunction } from "react"
import React from "react";
interface InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  onChange?: (event: any) => void;

}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }, ref) => {
  return (
    <div className=" flex flex-1 px-2 flex-col mx-2  mb-2">
      {!!label && <label className="" htmlFor={name}>{label}</label>}
      <input name={name} id={name} className="form-input focus:outline-none" ref={ref}  {...rest} />
    </div>
  )
}

export const InputText = forwardRef(InputBase)