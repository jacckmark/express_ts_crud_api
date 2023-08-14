import { ThemeType, useThemeContext } from "../context/themeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeContext();

  const defaultIconClasses = "fill-slate-100 hover:fill-slate-50 delay-75 cursor-pointer h-3/6 mx-1.5";

  return theme === ThemeType.dark ? (
    <MoonIcon onClick={toggleTheme} className={defaultIconClasses} />
  ) : (
    <SunIcon onClick={toggleTheme} className={defaultIconClasses} />
  );
};
