interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  
}

export default function Button({ text, ...props }: IButton) {
  return (
    <button className="mt-2 h-12 px-4 flex items-center justify-center gap-4 bg-teal-500 hover:bg-teal-700 text-white border rounded-md shadow-md" {...props}>
      <span className="font-semibold text-sm">{text}</span>
    </button>
  );
}
