import { Request, Response, NextFunction } from "express";
import { BookService } from "./book.service";

class BookController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const book = await new BookService().create(req.body);
      res.status(201).send(book);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    try {
      const books = await new BookService().find();
      res.status(200).send(books);
    } catch (error: any) {
      res.status(500).send({ message: "Internal Server Error", error });
    }
  }

  async findByTitle(req: Request, res: Response): Promise<void> {
    try {
      const book = await new BookService().findByTitle(req.params.title);
      if (!book || book.length === 0) {
        res.status(404).send({ message: "Book not found" });
      }

      res.status(200).send(book);
    } catch (error: any) {
      res.status(500).send({ message: "Internal Server Error", error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const updatedBook = await new BookService().update(
        req.params.id,
        req.body
      );
      if (!updatedBook) {
        res.status(404).send({ message: "Book not found" });
      }
      res.status(200).send(updatedBook);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const deletedBook = await new BookService().delete(req.params.id);
      if (!deletedBook) {
        res.status(404).send({ message: "Book not found" });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).send({ message: "Internal Server Error", error });
    }
  }
}

export default new BookController();
