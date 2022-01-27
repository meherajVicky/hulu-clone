import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { userAction } from "../../redux/user";

export default function AuthLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const setLogin = async () => {
      const token = localStorage.getItem("token");
      if (token === null) {
        return dispatch(userAction.setLogIn(false));
      } else {
        return dispatch(userAction.setLogIn(true));
      }
    };
    setLogin();
  }, [dispatch]);

  return (
    <div className="auth-loader-container">
      <div className="auth-loader"></div>
    </div>
  );
}
