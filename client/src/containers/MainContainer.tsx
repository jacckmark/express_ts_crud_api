import { ReactNode } from "react";
import { useThemeContext } from "../context/themeContext";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainContainer = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme} flex flex-col min-h-screen bg-zinc-50`}>
      <Header />
      <div className="flex flex-row min-h-screen">
        <Sidebar />
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};
