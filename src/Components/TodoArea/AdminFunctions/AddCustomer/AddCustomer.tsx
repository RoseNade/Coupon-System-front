import "./AddCustomer.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Beans";
import web from "../../../../Services/WebApi";
import notify from "../../../../Services/Notification";
import { customersAddedAction } from "../../../Redux/CustomersAppState";
import store from "../../../Redux/Store/Store";

function AddCustomer(): JSX.Element {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<CustomerModel>({ mode: "all", resolver: yupResolver(schema) });

  const addCustomer = async (customer: CustomerModel) => {
    web
      .addCustomer(customer)
      .then((res) => {
        notify.success("Customer added successfully");
        store.dispatch(customersAddedAction(res.data));
        navigate("/admin/customers");
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <div className="AddCustomer flex-top-center">
      <h1>Add a customer</h1>
      <form
        onSubmit={handleSubmit(addCustomer)}
        className="flex-top-center"
      >
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="email"
          id="email"
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="firstName">firstName</label>
        <input
          {...register("firstName")}
          type="text"
          placeholder="firstName"
          id="firstName"
        />
        <span>{errors.firstName?.message}</span>

        <label htmlFor="lastName">lastName</label>
        <input
          {...register("lastName")}
          type="text"
          placeholder="lastName"
          id="lastName"
        />
        <span>{errors.lastName?.message}</span>

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

export default AddCustomer;
