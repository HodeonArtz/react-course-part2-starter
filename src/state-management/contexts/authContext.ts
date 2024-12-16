import React, { Dispatch } from "react";
import { LogAction } from "../reducers/loginReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<LogAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
