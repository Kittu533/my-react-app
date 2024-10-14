import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return(
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
    {children}
  </DarkModeContext.Provider>
  )
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider
