"use client";
import { deletePassword } from "@/app/(main)/passwords/actions";
import { useTransition } from "react";
import { BiTrash } from "react-icons/bi";

export default function HeadingDeleteItem({ passwordId }: { passwordId?: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="px-3 py-2 flex items-center gap-2 hover:bg-gray-300"
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deletePassword(passwordId!);
        });
      }}
    >
      <BiTrash /> <span className="font-semibold text-sm">Delete</span>
    </button>
  );
}
