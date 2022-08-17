import moment from "moment";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../../Models/Beans";
import "./BuyCouponItem.css";
import { RiCoupon2Line } from "react-icons/ri";

interface BuyCouponItemProps {
    coupon: CouponModel;
}

function BuyCouponItem(props: BuyCouponItemProps): JSX.Element {
    return (
        <div className="BuyCouponItem flex-center">
            <div className="coupon">
                <h1>{props.coupon.title}</h1>
                <p>{props.coupon.category}</p>
                <p>Description: {props.coupon.description}</p>
                <div className="expire">
                    <p>Start date: {moment(props.coupon.startDate).format("DD/MM/yyyy")}</p>
                    <p>End date: {moment(props.coupon.endDate).format("DD/MM/yyyy")}</p>
                </div>
                <p>Amount: {props.coupon.amount}</p>
                <p>Price: {props.coupon.price}</p>
                <p>{props.coupon.image}</p>

                <div  className = "flex-row-non-wrap-list">
                    <span >Click to buy:</span>
                    <Link to = {`/coupons/buy/${props.coupon.id}`}>
                       <RiCoupon2Line size = {42}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BuyCouponItem;
