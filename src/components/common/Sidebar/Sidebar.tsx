import Link from "next/link";
import { SIDEBAR_ITEMS } from "../../../constances";

export default function Sidebar() {
  return (
    <section className="sidebar flex-none w-0 absolute md:sticky top-0 h-[calc(100vh-3.5rem-1px)] flex flex-col bg-white overflow-x-hidden border-r transition-all duration-500 scroll-y">
      {/* Sidebar Head */}
      <div className="py-8 text-center border-b">
        <h2 className="font-semibold text-2xl">Pass Man</h2>
        <p className="text-sm">Latest way of mange password.</p>
      </div>

      {/* Sidebar Content */}
      <div className="py-2">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem {...item} key={item.name} />
        ))}
      </div>
      
      {/* Sidebar Bootom  */}
      <div className="h-full flex items-end">
        {/* <p className="">@copyright mdmahikaishar</p> */}
      </div>
    </section>
  );
}

function SidebarItem(props: { icon: any, name: string; href: string }) {
  return (
    <Link className="px-6 py-2 flex items-center gap-4 transition-all hover:bg-gray-200" href={props.href}>
      <props.icon className="text-lg" />
      <span className="font-semibold text-sm">{props.name}</span>
    </Link>
  );
}
