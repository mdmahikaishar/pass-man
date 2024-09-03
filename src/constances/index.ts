import { BiHome, BiPlus, BiInfoCircle, BiUser, BiLogOut } from "react-icons/bi";

export const APP_NAME = "Pass Man";
export const APP_DES = "";

export const AUTH_TOKEN = "token";

export const SIDEBAR_ITEMS = [
  { icon: BiHome, name: "Home", href: "/" },
  { icon: BiPlus, name: "Add", href: "/passwords/add" },
  { icon: BiUser, name: "Profile", href: "/profile" },
  { icon: BiHome, name: "Setttings", href: "/settings" },
  { icon: BiInfoCircle, name: "About", href: "/about" },
  { icon: BiLogOut, name: "Logout", href: "/auth/logout" },
];
