import { ThemeToggler } from "../components/ThemeToggler";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <div className="bg-slate-200 h-20 flex flex-row items-center">
      <div className="grow">here goes my logo</div>
      <UserCircleIcon className="stroke-slate-100 hover:stroke-slate-50 delay-75 cursor-pointer h-3/6 mx-1.5" />
      <ThemeToggler />
    </div>
  );
};
