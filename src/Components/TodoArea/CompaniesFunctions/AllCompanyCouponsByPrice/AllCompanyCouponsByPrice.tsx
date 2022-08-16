import { useState, SetStateAction, useEffect } from "react";
import { CouponModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { couponsDownloadedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import CompanyCouponItem from "../CompanyCouponItem/CompanyCouponItem";
import "./AllCompanyCouponsByPrice.css";

function AllCompanyCouponsByPrice(): JSX.Element {
  const getInitialState = () => {
    const value = 0;
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [coupons, setCoupons] = useState<CouponModel[]>(
    store.getState().couponsReducer.coupons.filter((c) => c.price <= value)
  );
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(+e.target.value);
    const val: number = +e.target.value;
    setCoupons(
      store.getState().couponsReducer.coupons.filter((c) => c.price <= val)
    );
  };

  useEffect(() => {
    if (coupons.length === 0) {
      web
        .getAllCompanyCoupons()
        .then((res) => {
          notify.success("Success");
          // Update Component State (Local state)
          setCoupons(
            store
              .getState()
              .couponsReducer.coupons.filter((c) => c.price <= value)
          );
          // Update App State (Global State)
          store.dispatch(couponsDownloadedAction(res.data));
        })
        .catch((err) => {
          notify.error(err.message);
        });
    }
  }, []);

  return (
    <div className="AllCompanyCouponsByPrice flex-top-center">
      <h1>Customer Coupons List</h1>
      <h1>Choose A Price</h1>
      <br />
      <input
        type="number"
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
      <h1>{`You selected ${value}`}</h1>
      <div className="flex-row-none-wrap-list">
        {coupons.length > 0 ? (
          coupons.map((c) => <CompanyCouponItem key={c.id} coupon={c} />)
        ) : (
          <h1>no coupons yet</h1>
        )}
      </div>
    </div>
  );
}

export default AllCompanyCouponsByPrice;
