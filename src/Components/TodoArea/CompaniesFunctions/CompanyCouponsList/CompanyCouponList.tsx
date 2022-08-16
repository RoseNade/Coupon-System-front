import { useEffect, useState } from "react";
import { MdPlaylistAdd, MdOutlineCategory, MdCalculate } from "react-icons/md";
import "./CompanyCouponList.css";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../../Models/Beans";
import web from "../../../../Services/WebApi";
import notify from "../../../../Services/Notification";
import store from "../../../Redux/Store/Store";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import CouponItem from "../CompanyCouponItem/CompanyCouponItem";
import { couponsDownloadedAction } from "../../../Redux/CouponsAppState";

function CompanyCouponList(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponsReducer.coupons);

    useEffect(() => {
        if (coupons?.length === 0) {
            web.getAllCompanyCoupons()
                .then(result => {
                    notify.success("success, got the coupons");
                    setCoupons(result.data);
                    store.dispatch(couponsDownloadedAction(result.data));
                })
                .catch((error) => { notify.error(error.message) });
        }
    }, []);

    // const allCoupons = coupons.map(t => <CouponItem key={t.id} coupon={t} />);

    return (
        <div className="CompanyCouponList flex-top-center">

            <h2>Coupons List</h2>
            <div className="flex-center bigger-text ">
                <h3>To add a coupon click:</h3>
                <Link to="/company/coupons/add">
                    <MdPlaylistAdd color="white" size={42} />
                </Link>
            </div>

            <div className = "flex-center bigger-text">
                <span>To filter all the coupons with the desired category click:</span>
                <Link to = "/company/coupons/category/">
                    <MdOutlineCategory color = "white" size = {42} />
                </Link>
            </div>

            <div className = "flex-center bigger-text">
                <span>To filter all the coupons with the desired price click:</span>
                <Link to = "/company/coupons/price/">
                    <MdCalculate color = "white" size = {42} />
                </Link>
            </div>

            <div className="flex-row-non-wrap-list">
                {
                    coupons.length > 0
                        ?
                        coupons.map(c => <CouponItem key={c.id} coupon={c} />)
                        :
                        <EmptyView msg="No coupons found" />
                }
            </div>
        </div>
    );
}

export default CompanyCouponList;