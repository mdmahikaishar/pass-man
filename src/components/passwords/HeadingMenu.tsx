"use client";
import Link from "next/link";
import { useState } from "react";
import { BiDotsHorizontal, BiEdit } from "react-icons/bi";
import HeadingDeleteItem from "./HeadingDeteteItem";

export default function HeadingMenu({ passwordId }: { passwordId?: number }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((pre) => !pre);
  };

  return (
    <div className="relative">
      <button className="h-8 aspect-square grid place-items-center rounded-md hover:bg-gray-200" onClick={toggleShow}>
        <BiDotsHorizontal />
      </button>

      {show && (
        <div className="w-max absolute right-2 top-10 border">
          <Link className="px-3 py-2 flex items-center gap-2 hover:bg-gray-300" href={`/passwords/edit/${passwordId}`}>
            <BiEdit /> <span className="font-semibold text-sm">Edit</span>
          </Link>
          <HeadingDeleteItem passwordId={passwordId} />
        </div>
      )}
    </div>
  );
}
