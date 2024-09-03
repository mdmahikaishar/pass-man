import Link from "next/link";
import { Button } from "../ui";

interface IAuthForm {
  title: string;
  des: string;
  action: (formData: FormData) => void;
  navigate: {
    name: string;
    des: string;
    link: string;
  };
  buttonText: string;
  children: React.ReactNode;
}

export default function AuthForm(props: IAuthForm) {
  return (
    <div className="max-w-sm w-full px-4 py-8 border rounded-md shadow-md">
      {/* Auth From Header */}
      <div className="mb-8">
        <h1 className="mb-2 font-semibold text-2xl text-center">{props.title}</h1>
        <p className="text-sm text-center text-gray-500">{props.des}</p>
      </div>

      {/* Auth Form Content */}
      <form className="flex flex-col gap-4" action={props.action}>
        {props.children}

        <Button type="submit" text={props.buttonText} />
      </form>

      {/* Auth Form Navigation */}
      <div className="mt-4">
        <p className="text-center text-sm text-gray-500">
          {props.navigate.des}{" "}
          <Link className="font-semibold text-teal-500 hover:text-teal-700" href={props.navigate.link}>
            {props.navigate.name}
          </Link>
        </p>
      </div>
    </div>
  );
}
