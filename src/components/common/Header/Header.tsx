import { SidebarToggler, SidebarTogglerInput } from "../Sidebar/SidebarToggler";

export default function Header({ togglerHide }: { togglerHide?: boolean }) {
  return (
    <>
      <SidebarTogglerInput />

      <header className="sticky top-0 bg-white border-b z-10">
        <div className="holder h-14 flex itmes-center justify-between">
          {/* Header Left */}
          <div className="flex items-center gap-4">
            {!togglerHide && <SidebarToggler />}

            {/* Headeer Logo */}
            <a className="font-smeibold text-2xl" href="/">
              PassMan
            </a>
          </div>

          {/* Header Right */}
          <div className="flex items-center gap-4"></div>
        </div>
      </header>
    </>
  );
}
