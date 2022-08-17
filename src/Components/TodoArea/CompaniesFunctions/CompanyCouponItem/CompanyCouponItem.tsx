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
      <h4 className="text-overflow">{props.coupon.title}</h4>

      <div className="card flex-top-center">
        {/* <img
          src="https://media2.giphy.com/media/TLayDh2IZOHPW/giphy.gif?cid=ecf05e47iemdy1cz5lxtklhoyafe9vtm17hunmkb7m4btgby&rid=giphy.gif&ct=g"
          alt={props.coupon.title}
        /> */}
        <h5>{props.coupon.title}</h5>
        <p>{props.coupon.category}</p>
        <p>Description: {props.coupon.description}</p>
        <div className="expire">
          <p>
            Start date: {moment(props.coupon.startDate).format("DD/MM/yyyy")}
          </p>
          <p>End date: {moment(props.coupon.endDate).format("DD/MM/yyyy")}</p>
        </div>
        <p>Amount: {props.coupon.amount}</p>
        <p className="price">Price: {props.coupon.price}</p>
        <p>{props.coupon.image}</p>

        <div className="link flex-around">
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
