import { useState, SetStateAction, useEffect } from "react";
import { CouponModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { couponsDownloadedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import CompanyCouponItem from "../CompanyCouponItem/CompanyCouponItem";
import "./AllCouponsByCategory.css";

function AllCouponsByCategory(): JSX.Element {
  const getInitialState = () => {
    const value = "FOOD";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [coupons, setCoupons] = useState<CouponModel[]>(
    store.getState().couponsReducer.coupons.filter((c) => c.category === "FOOD")
  );
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
    const val: string = e.target.value.toString();
    setCoupons(
      store.getState().couponsReducer.coupons.filter((c) => c.category === val)
    );
  };

  useEffect(() => {
    web
      .getAllCompanyCoupons()
      .then((res) => {
        notify.success("Success got all the coupons with the asked category");
        // Update Component State (Local state)
        setCoupons(
          store
            .getState()
            .couponsReducer.coupons.filter((c) => c.category === "FOOD")
        );
        // Update App State (Global State)
        store.dispatch(couponsDownloadedAction(res.data));
      })
      .catch((err) => {
        notify.error(err.message);
      });
  }, []);

  return (
    <div className="AllCouponsByCategory flex-top-center">
      <h1>Company Coupons List</h1>
      <h1>Choose A Category</h1>
      <br />
      <select value={value} onChange={handleChange}>
        <option value="FOOD">Food</option>
        <option value="ELECTRICITY">Electricity</option>
        <option value="RESTAURANT">Restaurant</option>
        <option value="VACATION">Vacation</option>
      </select>
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

export default AllCouponsByCategory;
