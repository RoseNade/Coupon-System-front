class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        tasks: "http://localhost:8080/api/tasks/",
        count: "http://localhost:8080/api/tasks/count",
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        tasks: "http://localhost:8080/api/tasks/",
        count: "http://localhost:8080/api/tasks/count",
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;