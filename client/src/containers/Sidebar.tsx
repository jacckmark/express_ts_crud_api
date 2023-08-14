import { NavLink } from "react-router-dom";
import { UserIcon, HomeIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => (
  <div className="w-40 bg-gray-500 px-2 py-10 text-white">
    <ul className="flex flex-col gap-5">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "border-l-4 border-l-emerald-400 flex" : "flex border-l-none")}
        >
          <HomeIcon className="cursor-pointer w-1/6 mx-1.5" />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "border-l-4 border-l-emerald-400 flex" : "flex border-l-none")}
        >
          <UserIcon className="cursor-pointer w-1/6 mx-1.5" />
          <span>Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "border-l-4 border-l-emerald-400 flex" : "flex border-l-none")}
        >
          <ClipboardDocumentIcon className="cursor-pointer w-1/6 mx-1.5" />
          <span>Products</span>
        </NavLink>
      </li>
    </ul>
  </div>
);
