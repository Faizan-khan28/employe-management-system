import { createContext, useEffect, useState } from "react";
import { getLocalStoage, setLocalStorage } from "../Utils/localStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let [userData, setUserData] = useState(null);
  // localStorage.clear()

  useEffect(() => {
    setLocalStorage();
    let {Employees} = getLocalStoage();
    setUserData({Employees});
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData,]}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
}
