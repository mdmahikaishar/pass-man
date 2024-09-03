import Link from "next/link";
import { IPassword } from "@/types";
import { BiLogoGoogle } from "react-icons/bi";

interface IPasswordItemProps extends IPassword {}

export default function PasswordItem(props: IPasswordItemProps) {
  return (
    <Link
      className="h-16 md:h-20 px-4 flex items-center gap-4 border rounded-lg shadow-lg transition-all cursor-pointer hover:bg-gray-200"
      href={`/passwords/${props.id}`}
    >
      {/* Image */}
      <div className="flex-none h-10 md:h-12 aspect-square grid place-items-center bg-gray-100 border rounded-full shadow-lg">
        <BiLogoGoogle className="text-2xl" />
      </div>
      {/* Info */}
      <div className="flex-grow">
        <h3 className="font-semibold md:text-lg">{props.name}</h3>
        <p className="text-xs md:text-sm text-gray-500">{props.username}</p>
      </div>
    </Link>
  );
}
