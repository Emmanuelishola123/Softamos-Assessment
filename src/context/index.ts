import React, { createContext } from "react";


interface ThemeContextProps {
    isDarkTheme: boolean,
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}


export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)