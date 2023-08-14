import { ReactNode, createContext, useContext, useState } from "react";

export enum ThemeType {
  light = "light",
  dark = "dark"
}

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

  const toggleTheme = () => {
    console.log(theme);
    setTheme(prev => (prev === ThemeType.dark ? ThemeType.light : ThemeType.dark));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useThemeContext must be used inside the ThemeProvider");

  return context;
};
