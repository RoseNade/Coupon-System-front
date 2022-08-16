import { useNavigate } from "react-router-dom";
import "./AddCompany.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanyModel } from "../../../../Models/Beans";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { companiesAddedAction } from "../../../Redux/CompanyAppState";
import store from "../../../Redux/Store/Store";

function AddCompany(): JSX.Element {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

  const addCompany = async (company: CompanyModel) => {
    web
      .addCompany(company)
      .then((res) => {
        notify.success("Added company successfully");
        store.dispatch(companiesAddedAction(res.data));
        navigate("/admin/companies");
      })
      .catch(() => {
        notify.error("Please login");
        navigate("/admin/companies");
      });
  };

  return (
    <div className="AddCompany flex-top-center">
      <h1>Add a Company</h1>
      <form
        onSubmit={handleSubmit(addCompany)}
        className="flex-top-center special-box"
      >
        <label htmlFor="name">Name</label>
        <input {...register("name")} type="text" placeholder="name" id="name" />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="email"
          id="email"
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          id="password"
        />
        <span>{errors.password?.message}</span>

        <button className="button-success" disabled={!isValid}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCompany;
