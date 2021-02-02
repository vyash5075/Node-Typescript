"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes");
var mongoose_1 = __importDefault(require("mongoose"));
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new routes_1.Routes(); //instance of Routes class
        this.app = express_1.default();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            next();
        });
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default
            .connect("mongodb+srv://admin:admin@cluster0.iubmt.mongodb.net/graphqlpractice?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () { return console.log("connection successful"); })
            .catch(function (err) { return console.error(err); });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map