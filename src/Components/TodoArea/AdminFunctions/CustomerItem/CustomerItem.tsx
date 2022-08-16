import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Beans";
import "./CustomerItem.css";

interface CustomerItemProps {
  customer: CustomerModel;
}

function CustomerItem(props: CustomerItemProps): JSX.Element {
  return (
    <div className="CustomerItem">
        <div className="coupon flex-top-center">
          <h1>Customer id: {props.customer.id}</h1>
          <p>Customer email: {props.customer.email}</p>
          <p>Customer password: {props.customer.password}</p>
          <p>Customer first name: {props.customer.firstName}</p>
          <p>Customer last name: {props.customer.lastName}</p>
          <div className="flex-row-non-wrap-list gap">
            <span>Click to delete:</span>
            <Link to={`/admin/customers/delete/${props.customer.id}`}>
              <AiOutlineDelete size={42} />
            </Link>

            <span>Click to update:</span>
            <Link to={`/admin/customers/update/${props.customer.id}`}>
              <AiOutlineEdit size={42} />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerItem;
