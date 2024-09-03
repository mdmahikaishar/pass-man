interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({ label, ...props }: IInputField) {
  return (
    <div className="" hidden={props.hidden}>
      <label className="font-semibold text-sm select-none" htmlFor={props.id}>
        {label}
      </label>

      <div className="mt-2 h-12 px-4 flex items-center gap-4 border rounded-md focus-within:shadow-md">
        <input className="w-full bg-transparent outline-none" {...props} autoComplete="false" />
      </div>
    </div>
  );
}
