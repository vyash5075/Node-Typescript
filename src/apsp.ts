import express, { Application, Request, Response, NextFunction } from "express";
import http from "http";
import * as bodyParser from "body-parser";
const app: express.Application = express();

app.use(
  bodyParser.json({
    limit: "50mb",
    verify(req: any, res, buf, encoding) {
      req.rawBody = buf;
    },
  })
);

const add = (a: number, b: number) => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(2, 3));
  res.send("hellow");
});

// http.createServer((req, res) => {
//     res.end('hello world');
// })
// .listen(5000, () => console.log('Server is running'))

app.listen(5000, () => console.log("Server is running on port 5000"));
