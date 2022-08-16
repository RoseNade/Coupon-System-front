import moment from "moment";
import { CouponModel } from "../../../../Models/Beans";
import "./CustomerCouponItem.css";

interface CustomerCouponItemProps {
    coupon: CouponModel;
}

function CustomerCouponItem(props: CustomerCouponItemProps): JSX.Element {
    return (
        <div className="CustomerCouponItem">
            <h2>{props.coupon.title}</h2>

            <div className="coupon">
                <img src="https://media2.giphy.com/media/TLayDh2IZOHPW/giphy.gif?cid=ecf05e47iemdy1cz5lxtklhoyafe9vtm17hunmkb7m4btgby&rid=giphy.gif&ct=g" alt={props.coupon.title} />
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
            </div>
        </div>
    );
}

export default CustomerCouponItem;
