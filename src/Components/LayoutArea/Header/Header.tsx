import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClientType } from "../../../Models/Welcome";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import store from "../../Redux/Store/Store";
import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    const [isUserLoggedIn,setIsUserLoggedIn] = useState(store.getState().authReducer.user?.token !== undefined);
    const [userType, setUserType] = useState(store.getState().authReducer.user?.clientType);

    useEffect(() => {
        return store.subscribe(() => {
            setIsUserLoggedIn(store.getState().authReducer.user?.token !== undefined);
            setUserType(store.getState().authReducer.user?.clientType);
        })
    }, []);


    return (
        <div className="Header flex-around-top-bottom">
            <Logo />
            <h1>Coupon System</h1>
            <div>
                {isUserLoggedIn
                ?
                (
                    <>
                        {userType === ClientType.COMPANY
                        ?
                        (
                            <Link to = "/company/details/" className = "flex-center">Details</Link>
                        )
                        :
                        <>
                        {userType === ClientType.CUSTOMER
                        ?
                        (
                            <Link to = "/customer/details" className = "flex-center">Details</Link>
                        )
                        :
                        <>
                        {userType === ClientType.ADMIN
                        ?
                        (
                            <Link to = "/admin/details" className = "flex-center">Details</Link>
                        )
                        :
                        <>
                        </>
                        }
                        </>
                        }
                        </>}
                    </>
                ):
                <>
                </>
                }
                
                <AuthMenu />
            </div>
            
        </div>
    );
}

export default Header;
