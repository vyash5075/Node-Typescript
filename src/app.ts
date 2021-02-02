import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes(); //instance of Routes class

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
    dotenv.config();
  }

  private config(): void {
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      next();
    });

    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    const DB: any = process.env.DB;
    console.log("sdsd" + DB);
    mongoose
      .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("connection successful"))
      .catch((err) => console.error(err));
  }
}

export default new App().app;
