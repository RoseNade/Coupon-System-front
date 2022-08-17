import { useEffect, useState } from "react";
import store from "../../Redux/Store/Store";
import { ClientType } from "../../../Models/Welcome";
import CustomLink from "../../RoutingArea/CustomLink/CustomLink";
import "./Menu.css";

function Menu(): JSX.Element {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(store.getState().authReducer.user?.clientType);
    
      useEffect(() => {
        return store.subscribe(() => {
            setIsUserLoggedIn(store.getState().authReducer.user?.clientType);
        });
      }, []);

    return (
        <div className="Menu flex-top-center-menu-main a">
            {isUserLoggedIn === ClientType.COMPANY

                ?
                (
                    <>
                        <div>
                            <CustomLink to="home">Home</CustomLink>
                            <CustomLink to="/company/coupons">Coupons</CustomLink>
                            <CustomLink to="about">About</CustomLink>
                            <CustomLink to="donate">Donate</CustomLink>
                        </div>
                    </>
                )
                : (
                    <>
                        {isUserLoggedIn === ClientType.CUSTOMER
                            ?
                            (
                                <>
                                    <div>
                                        <CustomLink to="home">Home</CustomLink>
                                        <CustomLink to="/customer/mycoupons">My Coupons</CustomLink>
                                        <CustomLink to="/customer/coupons">Coupons</CustomLink>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    {isUserLoggedIn === ClientType.ADMIN
                                        ?
                                        (
                                            <>
                                                <div>
                                                    <CustomLink to="home">Home</CustomLink>
                                                    <CustomLink to="/admin/companies">Companies</CustomLink>
                                                    <CustomLink to="/admin/customers">Customers</CustomLink>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                Please sign in
                                            </>
                                        )}
                                </>
                            )}
                    </>
                )}
        </div>
    );
}

export default Menu;
