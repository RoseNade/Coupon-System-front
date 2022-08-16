import { CustomerModel } from "../../../../Models/Beans";
import "./CustomerItem.css";

interface CustomerItemProps {
  customer: CustomerModel;
}

function CustomerItem(props: CustomerItemProps): JSX.Element {
  return (
    <div className="CustomerItem flex-top-center">
      <h1>Customer id: {props.customer.id}</h1>
      <p>Customer email: {props.customer.email}</p>
      <p>Customer first name: {props.customer.firstName}</p>
      <p>Customer last name: {props.customer.lastName}</p>
    </div>
  );
}

export default CustomerItem;
