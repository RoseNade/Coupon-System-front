import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../../Services/Notification";
import { logoutAction } from "../../Redux/AuthAppState";
import { companiesClearAction } from "../../Redux/CompanyAppState";
import { couponsClearAction } from "../../Redux/CouponsAppState";
import store from "../../Redux/Store/Store";
import "./Logout.css";

function Logout(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const res = window.confirm("Are you sure you want to log out?");
    if (res) {
      store.dispatch(logoutAction());
      store.dispatch(companiesClearAction());
      store.dispatch(couponsClearAction());
      notify.success('Logged out successfully');
      navigate("/login");
    }
  }, []);
  return <></>;
}

export default Logout;
