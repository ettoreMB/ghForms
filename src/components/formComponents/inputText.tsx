import { ForwardedRef, forwardRef, ForwardRefRenderFunction } from "react"

interface InputProps {
  label?: string;
  name: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }, ref) => {
  return (
    <div className=" px-2 border-b border-teal-500 mb-2">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} className="form-input w-full px-4 py-3 focus:outline-none" ref={ref} {...rest} />
    </div>
  )
}

export const InputText = forwardRef(InputBase)