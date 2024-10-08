import express from "express";
import petRouter from "../routes/petRouter";
import adotanteRouter from "../routes/adotanteRouter";
import abrigoRouter from "../routes/abrigoRouter";
const router = (app: express.Router) => {
  app.use("/pets", petRouter);
  app.use("/adotantes", adotanteRouter);
  app.use("/abrigos", abrigoRouter);
};
export default router;
