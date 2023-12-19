import { DataSource } from "typeorm";
import path from "path";

const entitiesPath = path.join(__dirname, "../entities");

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [`${entitiesPath}/*`],
  synchronize: true,
});
