import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../Redux/Store/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(
    store.getState().authReducer.user?.token?.length > 0
  );
  
  const [name, setName] = useState(store.getState().authReducer.user?.name);

  useEffect(() => {
    store.subscribe(() => {
      setIsLoggedIn(store.getState().authReducer.user?.token?.length > 0);
      setName(store.getState().authReducer.user?.name);
    });
  }, []);

  return (
    <div className="AuthMenu flex-top-center">
      {isLoggedIn ? (
        <>
          Hello {name}{" "}
          <Link className="login-register" to="logout">
            Logout
          </Link>
        </>
      ) : (
        <>
          Hello Guest{" "}
          <Link className="login-register" to="login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthMenu;
