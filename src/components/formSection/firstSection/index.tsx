interface FirstSectionProps {
  title: string;
}


export function FirstSection({ title }: FirstSectionProps) {
  return (
    <>
      <div>
        <span>
          <label htmlFor="">{title}</label>
          <input type="checkbox" />
        </span>
      </div>
    </>
  )
}