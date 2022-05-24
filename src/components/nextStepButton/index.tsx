import { ArrowRight } from "phosphor-react";
type NextStepButtonProps = {
  title?: string;
}
export function NextStepButton({ title }: NextStepButtonProps) {
  return (
    <button type="submit" className="w-full mt-10 bg-teal-300 text-white p-4 rounded-lg text-center font-bold flex items-center justify-center">
      {!title ? "Próximo Passo" : title}
      <ArrowRight size={28} weight="bold" className="pt-1" />
    </button>
  )
}