import { Router } from "express";
import bookController from "./books/book.controller";
import { verifyToken } from "./auth/verify.middleware";

const routes = Router();

routes.post("/books", bookController.create);
routes.get("/books", verifyToken, bookController.find);
routes.get("/books/:title", bookController.findByTitle);
routes.put("/books/:id", bookController.update);
routes.delete("/books/:id", bookController.delete);

export { routes };
