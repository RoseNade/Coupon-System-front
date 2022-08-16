import { useState, useEffect } from "react";
import { CustomerModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { companiesDownloadedAction } from "../../../Redux/CompanyAppState";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerDetails.css";

function CustomerDetails(): JSX.Element {
    const [customerDetails, setCustomerDetails] = useState<CustomerModel>(new CustomerModel());

    useEffect( () => {
      web.getCustomerDetails()
      .then(res => {
          setCustomerDetails(res.data);
          companiesDownloadedAction(res.data);
      })
      .catch(err => {
          notify.error(err.message);
      })
    }, [])
    
    return (
        <div className="CustomerDetails flex-top-center">
			<CustomerItem customer = {customerDetails} />
        </div>
    );
}

export default CustomerDetails;
