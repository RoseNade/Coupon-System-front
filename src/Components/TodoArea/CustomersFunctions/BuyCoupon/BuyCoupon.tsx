import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { couponsAddedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import "./BuyCoupon.css";

function BuyCoupon(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);


    const buy = async () => {
        web.buyCoupon(couponId)
        .then(res => {
            notify.success("Coupon bought successfully");
            store.dispatch(couponsAddedAction(res.data));
            navigate('/customer/coupons')
        })
        .catch((error) => { notify.error(error.message) })
    }

    return (
        <div className="BuyCoupon flex-center">
            <h1>Are you sure you wanna buy coupon #{couponId}?</h1>
			<button onClick = {buy}>Buy</button>
        </div>
    );
}

export default BuyCoupon;
