import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CompanyModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { companiesDownloadedAction } from "../../../Redux/CompanyAppState";
import store from "../../../Redux/Store/Store";
import EmptyView from "../../../SharedArea/EmptyView/EmptyView";
import CompanyItem from "../CompanyItem/CompanyItem";
import "./AllCompanies.css";
import { AiFillFileAdd, AiOutlineFileSearch } from "react-icons/ai";

function AllCompanies(): JSX.Element {
  const [companies, setCompanies] = useState<CompanyModel[]>(
    store.getState().companiesReducer.companies
  );

  useEffect(() => {
    if (companies.length === 0) {
      web
        .getAllCompanies()
        .then((res) => {
          setCompanies(res.data);
          store.dispatch(companiesDownloadedAction(res.data));
        })
        .catch((err) => {
          notify.error(err.message);
        });
    }
  }, []);

  return (
    <div className="AllCompanies">
      <div className="flex-top-center">
        <h1>Company List</h1>
        <p className="flex-center">
          To Add A Company:
          <Link className="link" to="/admin/companies/add">
            <AiFillFileAdd size={45} />
          </Link>
        </p>
        <p>
          To Get A Company by ID:
          <Link className="link" to="/admin/companies/company/">
            <AiOutlineFileSearch size={45} />
          </Link>
        </p>
      </div>

      <div className="flex-row-non-wrap-list">
        {companies.length > 0 ? (
          companies.map((c) => <CompanyItem key={c.id} company={c} />)
        ) : (
          <EmptyView msg="No companies!" />
        )}
      </div>
    </div>
  );
}

export default AllCompanies;
