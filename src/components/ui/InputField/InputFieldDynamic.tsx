"use client";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

interface IInputFieldDynamic extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputFieldDynamic({ label, ...props }: IInputFieldDynamic) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((pre) => !pre);
  };

  return (
    <div className="">
      <label className="font-semibold text-sm select-none" htmlFor={props.id}>
        {label}
      </label>

      <div className="mt-2 h-12 px-4 flex items-center gap-4 border rounded-md focus-within:shadow-md">
        <input className="w-full bg-transparent outline-none" {...props} type={props.type !== "password" ? props.type : show ? "text" : "password"} />

        {props.type === "password" && (
          <button className="flex-none h-8 aspect-square grid place-items-center text-gray-500 hover:text-gray-900" type="button" onClick={toggleShow}>
            {show ? <BiHide key="hide-field" /> : <BiShow key="show-field" />}
          </button>
        )}
      </div>
    </div>
  );
}
