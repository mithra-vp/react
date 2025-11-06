import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();     //createcontxt

export const ThemeProvider = ({children}) => {

    // logic
    const [darkMode,setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            <div
            style={{
                background:darkMode? "#333" : "#fff",
                color: darkMode? "#fff" : "#333",
                minHeight:"100vh",
                padding:"1rem"
            }}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
