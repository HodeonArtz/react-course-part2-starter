import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import AuthContext from "./contexts/authContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, loginDispatch] = useReducer(loginReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch: loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
