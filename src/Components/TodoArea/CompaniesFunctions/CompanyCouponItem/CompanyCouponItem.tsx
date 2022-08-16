import moment from "moment";
import "./CompanyCouponItem.css";
import { MdEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../../Models/Beans";

interface CompanyCouponItem {
    coupon: CouponModel;
}

function CompanyCouponItem(props: CompanyCouponItem): JSX.Element {

    return (
        <div className="CompanyCouponItem">
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

                <div className="flex-top-center link">
                    <Link to={`update/${props.coupon.id}`}>
                        <MdEditNote size={42} />
                    </Link>
                    <Link to={`delete/${props.coupon.id}`}>
                        <AiOutlineDelete size={42} />
                    </Link>
                </div>


            </div>
        </div>
    );
}

export default CompanyCouponItem;
