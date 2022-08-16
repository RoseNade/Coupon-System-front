import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CompanyModel, CouponModel } from "../../../../Models/Beans";
import store from "../../../Redux/Store/Store";
import "./UpdateCompany.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import web from "../../../../Services/WebApi";
import notify from "../../../../Services/Notification";
import { companiesUpdatedAction } from "../../../Redux/CompanyAppState";

function UpdateCompany(): JSX.Element {
  const params = useParams();

  const navigate = useNavigate();

  const companyId = +(params.id || 0);

  const company = store
    .getState()
    .companiesReducer.companies.filter((c) => c.id === companyId)[0];

  const [origin, setOrigin] = useState<CompanyModel>({
    name: company.name,
    email: company.email,
    password: company.password,
  });

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),

    email: yup.string().email("Invalid Email").required("Email is required"),

    password: yup.string().min(3).max(8).required("Password is required"),
  });

  let defaultValuesObj = { ...origin };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<CompanyModel>({
    defaultValues: defaultValuesObj,
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const updateCompany = async (company: CompanyModel) => {
    web
      .updateCompany(companyId, company)
      .then((res) => {
        notify.success("Company Updated Successfully");
        store.dispatch(companiesUpdatedAction(res.data));
        navigate("/admin/companies");
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <div className="UpdateCompany">
      <form onSubmit={handleSubmit(updateCompany)} className="flex-top-center">
        <label htmlFor="email">email</label>
        <input
          {...register("email")}
          type="text"
          placeholder="Please enter email"
          name="email"
          id="email"
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="name">Name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Please enter description"
          name="name"
          id="name"
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Please enter password"
          name="password"
          id="password"
        />
        <button disabled={!isDirty}>Update</button>
      </form>
    </div>
  );
}

export default UpdateCompany;
