import { Route, Routes } from "react-router-dom";
import About from "../../PagesArea/About/About";
import Donate from "../../PagesArea/Donate/Donate";
import Home from "../../PagesArea/Home/Home";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import EditCoupon from "../../TodoArea/CompaniesFunctions/EditCoupon/EditCoupon";
import DeleteCoupon from "../../TodoArea/CompaniesFunctions/DeleteCoupon/DeleteCoupon";
import Login from "../../AuthArea/Login/Login";
import AddCoupon from "../../TodoArea/CompaniesFunctions/AddCoupon/AddCoupon";
import Logout from "../../AuthArea/Logout/Logout";
import CompanyCouponList from "../../TodoArea/CompaniesFunctions/CompanyCouponsList/CompanyCouponList";
import CustomerCouponsList from "../../TodoArea/CustomersFunctions/CustomerCouponsList/CustomerCouponsList";
import BuyCoupon from "../../TodoArea/CustomersFunctions/BuyCoupon/BuyCoupon";
import AllCoupons from "../../TodoArea/CustomersFunctions/AllCoupons/AllCoupons";
import AddCompany from "../../TodoArea/AdminFunctions/AddCompany/AddCompany";
import AllCompanies from "../../TodoArea/AdminFunctions/AllCompanies/AllCompanies";
import UpdateCompany from "../../TodoArea/AdminFunctions/UpdateCompany/UpdateCompany";
import DeleteCompany from "../../TodoArea/AdminFunctions/DeleteCompany/DeleteCompany";
import UpdateCustomer from "../../TodoArea/AdminFunctions/UpdateCustomer/UpdateCustomer";
import DeleteCustomer from "../../TodoArea/AdminFunctions/DeleteCustomer/DeleteCustomer";
import AddCustomer from "../../TodoArea/AdminFunctions/AddCustomer/AddCustomer";
import AllCustomers from "../../TodoArea/AdminFunctions/AllCustomers/AllCustomers";
import AdminDetails from "../../TodoArea/AdminFunctions/AdminDetails/AdminDetails";
import CompanyDetails from "../../TodoArea/CompaniesFunctions/CompanyDetails/CompanyDetails";
import OneCompany from "../../TodoArea/AdminFunctions/OneCompany/OneCompany";
import OneCustomer from "../../TodoArea/AdminFunctions/OneCustomer/OneCustomer";
import CustomerDetails from "../../TodoArea/CustomersFunctions/CustomerDetails/CustomerDetails";
import AllCouponsByCategory from "../../TodoArea/CompaniesFunctions/AllCouponsByCategory/AllCouponsByCategory";
import AllCustomerCouponsByCategory from "../../TodoArea/CustomersFunctions/AllCustomerCouponsByCategory/AllCustomerCouponsByCategory";
import AllCustomerCouponsByPrice from "../../TodoArea/CustomersFunctions/AllCustomerCouponsByPrice/AllCustomerCouponsByPrice";
import AllCompanyCouponsByPrice from "../../TodoArea/CompaniesFunctions/AllCompanyCouponsByPrice/AllCompanyCouponsByPrice";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* login features */}
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                {/* company features */}
                <Route path="/company/coupons/" element={<CompanyCouponList />} />
                <Route path="/company/coupons/price" element={<AllCompanyCouponsByPrice />} />
                <Route path="/company/coupons/category/" element={<AllCouponsByCategory />} />
                <Route path="/company/coupons/add" element={<AddCoupon />} />
                <Route path="/company/coupons/update/:id" element={<EditCoupon />} />
                <Route path="/company/coupons/delete/:id" element={<DeleteCoupon />} />
                <Route path="/company/details" element={<CompanyDetails />} />

                {/* customer features */}
                <Route path="/customer/mycoupons/" element={<CustomerCouponsList />} />
                <Route path="/customer/mycoupons/category" element={<AllCustomerCouponsByCategory />} />
                <Route path="/customer/mycoupons/price" element={<AllCustomerCouponsByPrice />} />
                <Route path="/coupons/buy/:id" element={<BuyCoupon />} />
                <Route path="/customer/coupons" element={<AllCoupons />} />
                <Route path="/customer/details" element={<CustomerDetails />} />

                {/* admin features */}
                <Route path="/admin/details" element={<AdminDetails />} />

                <Route path="/admin/companies/" element={<AllCompanies />} />
                <Route path="/admin/companies/add" element={<AddCompany />} />
                <Route path="/admin/companies/delete/:id" element={<DeleteCompany />} />
                <Route path="/admin/companies/update/:id" element={<UpdateCompany />} />
                <Route path="/admin/companies/company/" element={<OneCompany />} />

                <Route path="/admin/customers/" element={<AllCustomers />} />
                <Route path="/admin/customers/update/:id" element={<UpdateCustomer />} />
                <Route path="/admin/customers/add" element={<AddCustomer />} />
                <Route path="/admin/customers/delete/:id" element={<DeleteCustomer />} />
                <Route path="/admin/customers/customer/" element={<OneCustomer />} />

                {/* donation and about features */}
                <Route path="/about" element={<About />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
