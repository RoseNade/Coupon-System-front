import { useState, useEffect } from "react";
import { AiFillFileAdd, AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { customersDownloadedAction } from "../../../Redux/CustomersAppState";
import store from "../../../Redux/Store/Store";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./AllCustomers.css";

function AllCustomers(): JSX.Element {
  const [customers, setCustomers] = useState<CustomerModel[]>(
    store.getState().customersReducer.customers
  );

  useEffect(() => {
    if (customers.length === 0) {
      web
        .getAllCustomers()
        .then((res) => {
          setCustomers(res.data);
          store.dispatch(customersDownloadedAction(res.data));
        })
        .catch((err) => {
          notify.error(err.message);
        });
    }
  }, []);

  return (
    <div className="AllCustomers">
      <div className="flex-top-center">
        <h1>Customers List</h1>
        <p className="flex-center">
          To Add A Customer:
          <Link className="link" to="/admin/customers/add">
            <AiFillFileAdd size={45} className="" />
          </Link>
        </p>
        <p className="flex-center">
          To Get One Customer:
          <Link className="link" to="/admin/customers/customer">
            <AiOutlineFileSearch size={45} className="" />
          </Link>
        </p>
      </div>

      <div className="flex-row-non-wrap-list">
        {customers.length > 0 ? (
          customers.map((c) => <CustomerItem key={c.id} customer={c} />)
        ) : (
          <EmptyView msg="No customers!" />
        )}
      </div>
    </div>
  );
}

export default AllCustomers;
