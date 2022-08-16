import "./UpdateCustomer.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { customersAddedAction, customersUpdatedAction } from "../../../Redux/CustomersAppState";
import store from "../../../Redux/Store/Store";
import { CustomerModel } from "../../../../Models/Beans";
import { useState } from "react";

function UpdateCustomer(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const customerId = +(params.id || 0);

  const [customer, setCustomer] = useState<CustomerModel>(
    store.getState().customersReducer.customers.filter((c) => c.id === customerId)[0]
  );

  const [origin, setOrigin] = useState<CustomerModel>({
    email: customer.email,
    firstName: customer.firstName,
    lastName: customer.lastName,
    password: customer.password,
  });

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Valid email is required")
      .required("Email is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    password: yup.string().required("Password is required"),
  });

  let defaultValuesObj = { ...origin };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<CustomerModel>({
    defaultValues: defaultValuesObj,
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const updateCustomer = async (customer: CustomerModel) => {
    web
      .updateCustomer(customerId, customer)
      .then((res) => {
        notify.success("Customer updated successfully");
        store.dispatch(customersUpdatedAction(res.data));
        navigate("/admin/customers");
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <div className="UpdateCustomer flex-top-center">
      <h1>Update a customer</h1>
      <form onSubmit={handleSubmit(updateCustomer)} className="flex-top-center">
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

        <button className="button-success" disabled={!isDirty}>
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateCustomer;