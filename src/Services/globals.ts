class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        adminApi: "http://localhost:8080/admin/",
        companyApi: "http://localhost:8080/company/",
        customerApi: "http://localhost:8080/customer/",
        welcomeApi: "http://localhost:8080/welcome/",
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        adminApi: "/admin/",
        companyApi: "/company/",
        customerApi: "/customer/",
        welcomeApi: "/welcome/",
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;