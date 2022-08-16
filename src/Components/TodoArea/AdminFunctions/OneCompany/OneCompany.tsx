import { useState, SetStateAction } from "react";
import { CompanyModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import CompanyItem from "../CompanyItem/CompanyItem";
import "./OneCompany.css";

function OneCompany(): JSX.Element {
  const [idx, setIdx] = useState<number>();
  const [company, setCompany] = useState<CompanyModel>(new CompanyModel);

  let handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    web
      .getOneCompany(+e.target.value.toString())
      .then((res) => {
        notify.success("Success got one company");
        setCompany(res.data);
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <div className="OneCompany flex-top-center">
      <h1>Search</h1>
      <input
        type="number"
        placeholder="Search"
        onChange={handleChange}
        value={idx}
      />
      <br />
      {company.name?.length > 0 ? (
        <CompanyItem key={company.id} company={company} />
      ) : (
        <h1>Pick Company Id</h1>
      )}
    </div>
  );
}

export default OneCompany;
