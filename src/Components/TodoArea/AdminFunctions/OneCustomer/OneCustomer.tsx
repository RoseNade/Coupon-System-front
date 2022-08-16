import { useState, SetStateAction } from "react";
import { CustomerModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./OneCustomer.css";

function OneCustomer(): JSX.Element {
  const [idx, setIdx] = useState<number>();
  const [customer, setCustomer] = useState<CustomerModel>(new CustomerModel());

  let handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    web
      .getOneCustomer(+e.target.value.toString())
      .then((res) => {
        notify.success("Success got one customer");
        setCustomer(res.data);
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };
  return <div className="OneCustomer flex-top-center">
    <h1>Search</h1>
      <input
        type="number"
        placeholder="Search"
        onChange={handleChange}
        value={idx}
      />
      <br />
      {customer.firstName?.length > 0 ? (
        <CustomerItem key={customer.id} customer={customer} />
      ) : (
        <h1>Pick Customer Id</h1>
      )}
  </div>;
}

export default OneCustomer;
