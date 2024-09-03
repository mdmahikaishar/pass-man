import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

interface INavigation {
  name?: string;
  back?: string;
  hidden?: boolean;

  rightSide?: () => React.ReactNode;
}

export default function Navigation(props: INavigation) {
  return !props.hidden ? (
    <div className="h-12 px-4 flex items-center justify-between">
      {/* Navigaiton Left */}
      <div className="w-full flex items-center gap-2">
        {props.back && (
          <Link className="h-8 aspect-square grid place-items-center hover:bg-gray-200" href={props.back}>
            <BiLeftArrow />
          </Link>
        )}
        {props.name && <h3 className="font-semibold text-sm select-none">{props.name}</h3>}
      </div>

      {/* Navigation Right */}
      <div className="flex-none flex items-center gap-2">{props.rightSide && <props.rightSide />}</div>
    </div>
  ) : null;
}
