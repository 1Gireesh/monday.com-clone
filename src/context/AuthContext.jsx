import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {

  

  const [email,setEmail] = useState(null);

  return (
    <authContext.Provider value={{ email,setEmail }}>
      {children}
    </authContext.Provider>
  )
};

export default AuthContextProvider;