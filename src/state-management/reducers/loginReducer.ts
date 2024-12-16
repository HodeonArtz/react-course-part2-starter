interface Login {
  type: "LOGIN";
  user: string;
}
interface Logout {
  type: "LOGOUT";
}
type LogAction = Login | Logout;

const loginReducer = (loginStatus: string, action: LogAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};
export default loginReducer;
