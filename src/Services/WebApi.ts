import axios from "axios";
import { Category, CompanyModel, CouponModel, CustomerModel } from "../Models/Beans";
import { CredentialsModel, LoginInformationModel, LoginRequestModel, UserModel } from "../Models/Welcome";
import globals from "./Globals";
import tokenAxios from "./TokenAxios";
// import notify from "./Notification";

class WebApi {

    private adminCompaniesURL = globals.urls.adminApi + 'companies/';
    private adminCustomersURL = globals.urls.adminApi + 'customers/';
    private companyCouponsURL = globals.urls.companyApi + 'coupons/';
    private customerCouponsURL = globals.urls.customerApi + 'coupons/';
    private welcomeURL = globals.urls.welcomeApi;

    // ADMIN FUNCTIONALITY
    public async addCompany(company: CompanyModel): Promise<any> {
        return await tokenAxios.post<CompanyModel>(this.adminCompaniesURL, company);
    }

    public async updateCompany(companyId: number, company: CompanyModel): Promise<any> {
        return await tokenAxios.put<CompanyModel>(this.adminCompaniesURL + companyId, company);
    }

    public async deleteCompany(companyId: number): Promise<any> {
        return await tokenAxios.delete<any>(this.adminCompaniesURL + companyId);
    }

    public async getAllCompanies(): Promise<any> {
        return await tokenAxios.get<CompanyModel[]>(this.adminCompaniesURL);
    }

    public async getOneCompany(companyId: number): Promise<any> {   
        return await tokenAxios.get<CompanyModel>(this.adminCompaniesURL + companyId);
    }

    public async addCustomer(customer: CustomerModel): Promise<any> {
        return await tokenAxios.post<CustomerModel>(this.adminCustomersURL, customer);
    }

    public async updateCustomer(customerId: number, customer: CustomerModel): Promise<any> {
        return await tokenAxios.put<CustomerModel>(this.adminCustomersURL + customerId, customer);
    }

    public async deleteCustomer(customerId: number): Promise<any> {
        return await tokenAxios.delete<any>(this.adminCustomersURL + customerId);
    }

    public async getAllCustomers(): Promise<any> {
        return await tokenAxios.get<CustomerModel[]>(this.adminCustomersURL);
    }

    public async getOneCustomer(customerId: number): Promise<any> {
        return await tokenAxios.get<CustomerModel>(this.adminCustomersURL + customerId);
    }

    // COMPANY FUNCTIONALITY
    public async addCoupon(coupon: CouponModel): Promise<any> {
        return await tokenAxios.post<CouponModel>(this.companyCouponsURL, coupon);
    }

    public async deleteCoupon(id: number): Promise<any> {
        return await tokenAxios.delete<any>(this.companyCouponsURL + id)
    }

    public async updateCoupon(id: number, coupon: CouponModel): Promise<any> {
        return await tokenAxios.put<CompanyModel>(this.companyCouponsURL + id, coupon)
    }

    public async getAllCompanyCoupons(): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.companyCouponsURL);
    }

    public async getOneCoupon(id: number): Promise<any> {
        return await tokenAxios.get<CouponModel>(this.companyCouponsURL + id);
    }

    public async getAllCompanyCouponsByCategory(category: Category): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.companyCouponsURL + 'category/' + category);
    }

    public async getAllCompanyCouponsBelowPrice(price: number): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.companyCouponsURL + 'price/' + price);
    }

    public async getCompanyDetails(): Promise<any> {
        return await tokenAxios.get<CompanyModel>(globals.urls.companyApi + 'details');
    }

    // CUSTOMER FUNCTIONALITY
    public async buyCoupon(id: number): Promise<any> {
        return await tokenAxios.post<CouponModel>(this.customerCouponsURL + id);
    }

    public async getAllCustomerCoupons(): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.customerCouponsURL);
    }

    public async getAllCustomerCouponsByCategory(category: Category): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.customerCouponsURL + 'category/' + category);
    }

    public async getAllCustomerCouponsByPrice(price: number): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.customerCouponsURL + 'price/' + price);
    }

    public async getCustomerDetails(): Promise<any>{
        return await tokenAxios.get<CustomerModel>(globals.urls.customerApi + 'details');
    }

    public async getAllCoupons(): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(globals.urls.customerApi + 'allCoupons')
    }

    // LOGIN FUNCTIONALITY
    public async login(credentials: LoginRequestModel): Promise<any>{
        return await axios.post<UserModel>(this.welcomeURL + 'login', credentials);
    }
}
const web = new WebApi();
export default web;