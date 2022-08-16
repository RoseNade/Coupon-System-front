import axios from "axios";
import store from "../Components/Redux/Store/Store";

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use((request) => {
  request.headers = {
    authorization: store.getState().authReducer.user?.token,
  };

  return request;
});

export default tokenAxios;