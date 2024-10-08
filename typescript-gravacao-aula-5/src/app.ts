import "express-async-errors";
import express from "express";
import router from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import { erroMiddleware } from "./middleware/erro";
const app = express();
app.use(express.json());
router(app);

app.get("/teste", () => {
  throw new Error("Erro teste");
});

app.use(erroMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((erro) => {
    console.log(erro);
  });

export default app;
