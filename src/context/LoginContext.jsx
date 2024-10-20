import { createContext, useEffect, useState } from "react";
import { token } from "../helpers/auth";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (token) {
        console.log(token)
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
