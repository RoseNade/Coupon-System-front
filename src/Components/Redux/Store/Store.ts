import { combineReducers, createStore } from "redux";
import { authReducer } from "../AuthAppState";
import { companiesReducer } from "../CompanyAppState";
import { couponsReducer } from "../CouponsAppState";
import { customersReducer } from "../CustomersAppState";

const reducers = combineReducers({
  companiesReducer: companiesReducer,
  couponsReducer: couponsReducer,
  customersReducer: customersReducer,
  authReducer: authReducer,
});
const store = createStore(reducers);

export default store;