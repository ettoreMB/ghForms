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
    <div className="flex-1 px-2 mx-2 border-b border-teal-500 mb-2">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} className="form-input w-full px-6 py-3 focus:outline-none" ref={ref}  {...rest} />
    </div>
  )
}

export const InputText = forwardRef(InputBase)