import { Outlet } from "react-router-dom";
import About from "../../PagesArea/About/About";
import Donate from "../../PagesArea/Donate/Donate";
import Routing from "../../RoutingArea/Routing/Routing";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import AddTodo from "../../TodoArea/CompaniesFunctions/AddCoupon/AddCoupon";
import TodoList from "../../TodoArea/CompaniesFunctions/CompanyCouponsList/CompanyCouponList";

import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routing />
            <Outlet /> 
        </div>
    );
}

export default Main;
