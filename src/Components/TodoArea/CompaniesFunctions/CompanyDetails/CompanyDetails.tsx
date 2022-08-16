import { SetStateAction, useEffect, useState } from "react";
import { CompanyModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { companiesDownloadedAction } from "../../../Redux/CompanyAppState";
import CompanyItem from "../CompanyItem/CompanyItem";
import "./CompanyDetails.css";

function CompanyDetails(): JSX.Element {
  const [companyDetails, setCompanyDetails] = useState<CompanyModel>(new CompanyModel());

  useEffect( () => {
    web.getCompanyDetails()
    .then(res => {
        setCompanyDetails(res.data);
        companiesDownloadedAction(res.data);
    })
    .catch(err => {
        notify.error(err.message);
    })
  }, [])

  return (
    <div className="CompanyDetails flex-top-center">
      <CompanyItem company={companyDetails} />
    </div>
  );
}

export default CompanyDetails;
