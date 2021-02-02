"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var app = express_1.default();
app.use(bodyParser.json({
    limit: "50mb",
    verify: function (req, res, buf, encoding) {
        req.rawBody = buf;
    },
}));
var add = function (a, b) { return a + b; };
app.get("/", function (req, res, next) {
    console.log(add(2, 3));
    res.send("hellow");
});
// http.createServer((req, res) => {
//     res.end('hello world');
// })
// .listen(5000, () => console.log('Server is running'))
app.listen(5000, function () { return console.log("Server is running on port 5000"); });
//# sourceMappingURL=apsp.js.map