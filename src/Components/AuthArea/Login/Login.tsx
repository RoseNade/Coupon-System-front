import "./Login.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import web from "../../../Services/WebApi";
import { ClientType, LoginModel, LoginRequestModel } from "../../../Models/Welcome";
import notify from "../../../Services/Notification";
import store from "../../Redux/Store/Store";
import { loginAction } from "../../Redux/AuthAppState";

function Login(): JSX.Element {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email("A Valid Email Is Required"),

    password: yup
      .string()
      .required("Password Is Required")
      .min(3, "at least 3 characters required")
      .max(8, "at most 8 characters required"),
    type: yup.mixed<ClientType>().oneOf(Object.values(ClientType)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });

  const loginUser = async (model: LoginModel) => {
    const credential = new LoginRequestModel();
    credential.email = model.email;
    credential.password = model.password;
    credential.clientType = model.clientType;

    web
      .login(credential)
      .then((res) => {
        notify.success('success');
        store.dispatch(loginAction(res.data));
        console.log(res.data);

        if (credential.clientType === ClientType.COMPANY && res.data.token !== null) {
          navigate('/company/coupons');
        } else if (credential.clientType === ClientType.CUSTOMER && res.data.token !== null) {
          navigate('/customer/mycoupons');
        }
        else if (credential.clientType === ClientType.ADMIN && res.data.token !== null) {
          navigate('/home');
        }
      }
      )
      .catch((err) => {
        notify.error(err.message);
        navigate('/login');
      });
  };

  return (
    <div className="Login flex-top-center">
      <h1>Login</h1>
      <label htmlFor="clientType">Client Type</label>
      <form onSubmit={handleSubmit(loginUser)} className="flex-top-center a">
      <select {...register("clientType")} id="clientType">
          <option value="" disabled={true} selected style={{ color: "black" }}></option>
          <option value="ADMIN">{ClientType.ADMIN}</option>
          <option value="COMPANY">{ClientType.COMPANY}</option>
          <option value="CUSTOMER">{ClientType.CUSTOMER}</option>
        </select>

        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" placeholder="Email" id="email" />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" placeholder="Password" id="password" />
        <span>{errors.password?.message}</span>

        
        <span>{errors.clientType?.message}</span>

        <button className="button-success" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
