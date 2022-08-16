export class CompanyModel{
    public id?: number;
    public name?: string;
    public email?: string;
    public password?: string;
    // public coupons?: CouponModel[] = [];

    public constructor(id?: number, name?: string, email?: string, password?: string/* , coupons?: CouponModel[] */){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        // this.coupons = coupons;
    }
}

export class CustomerModel {
    public id?: number;
    public firstName?: string = "";
    public lastName?: string = "";
    public email?: string;
    public password?: string;

    public constructor(id?: number, firstName?: string, lastName?: string, email?: string, password?: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export class CouponModel {
    public id?: number;
    // public company?: CompanyModel;
    public category?: Category;
    public title?: string;
    public description?: string;
    public startDate?: Date;
    public endDate?: Date;
    public amount?: number;
    public price?: number;
    public image?: string;


    public constructor(id?: number, category?: Category, title?: string, description?: string, startDate?: Date, endDate?: Date, amount?: number, price?: number, image?: string){
        this.id = id;
        // this.company = company;
        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
    }
}

export enum Category {
    ELECTRICITY = 'ELECTRICITY',
    FOOD = 'FOOD',
    VACATION = 'VACATION',
    VEHICLES = 'VEHICLES',
    ACCESSORIES = 'ACCESSORIES'
}