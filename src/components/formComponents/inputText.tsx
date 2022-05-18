interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export function InputText({ placeholder, type, ...rest }: InputTextProps) {
  return (
    <div className=" px-2 border-b border-teal-500 mr-2">
      <input placeholder={placeholder} {...rest} className="form-input w-full px-4 py-3 focus:outline-none" />
    </div>
  )
}