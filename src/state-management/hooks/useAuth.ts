import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const useAuth = () => useContext(AuthContext);

// const useAuth = () => ({ user: null });

export default useAuth;
