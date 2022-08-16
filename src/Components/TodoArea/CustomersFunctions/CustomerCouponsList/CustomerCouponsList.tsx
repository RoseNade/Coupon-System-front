import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { couponsDownloadedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import "./CustomerCouponsList.css";
import CustomerCouponItem from "../CustomerCouponItem/CustomerCouponItem";
import { MdOutlineCategory, MdCalculate } from "react-icons/md";

function CustomerCouponsList(): JSX.Element {
  const [coupons, setCoupons] = useState<CouponModel[]>(
    store.getState().couponsReducer.coupons
  );

  useEffect(() => {
    if (store.getState().authReducer.user?.token !== undefined) {
      web
        .getAllCustomerCoupons()
        .then((result) => {
          setCoupons(result.data);
          store.dispatch(couponsDownloadedAction(result.data));
        })
        .catch((error) => {
          notify.error(error.message);
        });
    }
  }, []);

  return (
    <div className="CustomerCouponsList">
      <div className="flex-center bigger-text">
        <span> To choose a specific category please click:</span>
        <Link to="/customer/mycoupons/category">
          <MdOutlineCategory color="white" size={42} />
        </Link>
      </div>

      <div className = "flex-center bigger-text">
        <span> To choose a specific price please click:</span>
        <Link to="/customer/mycoupons/price">
          <MdCalculate color="white" size={42} />
        </Link>
      </div>

      <div className="flex-row-non-wrap-list">
        {coupons.length > 0 ? (
          coupons.map((c) => <CustomerCouponItem key={c.id} coupon={c} />)
        ) : (
          <EmptyView msg="No coupons found" />
        )}
      </div>
    </div>
  );
}

export default CustomerCouponsList;
