export function SidebarTogglerInput() {
  return <input className="sidebar-toggler-input hidden" type="checkbox" id="sidebar-toggler" defaultChecked={true} />;
}

export function SidebarToggler() {
  return (
    <label className="sidebar-toggler-label h-10 aspect-square relative grid place-items-center rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer" htmlFor="sidebar-toggler">
      <span className="w-6 h-[2px] absolute bg-gray-600 transition-transform duration-500"></span>
      <span className="w-6 h-[2px] absolute bg-gray-600 transition-transform duration-500"></span>
      <span className="w-6 h-[2px] absolute bg-gray-600 transition-transform duration-500"></span>
    </label>
  );
}
