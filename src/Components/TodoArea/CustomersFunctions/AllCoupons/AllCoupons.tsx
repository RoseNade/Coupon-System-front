import { useEffect, useState } from "react";
import { CouponModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { couponsDownloadedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import BuyCouponItem from "../BuyCouponItem/BuyCouponItem";
import "./AllCoupons.css";

function AllCoupons(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponsReducer.coupons);

    useEffect(() => {
        if (store.getState().authReducer.user?.token !== undefined) {
            web.getAllCoupons()
                .then((res) => {
                    setCoupons(res.data);
                    store.dispatch(couponsDownloadedAction(res.data));
                })
                .catch(err => notify.error(err.message));
        }
    }, []);

    return (
        <div className="AllCoupons flex-row-non-wrap-list">
            {
                coupons.length > 0
                    ?
                    coupons.map(c => <BuyCouponItem key={c.id} coupon={c} />)
                    :
                    <EmptyView msg="No coupons found" />
            }
        </div>
    );
}

export default AllCoupons;
