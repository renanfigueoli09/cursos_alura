import BookModel, { IBook } from "./book.schema";

export class BookService {
  public async create(book: IBook) {
    const existingBook = await BookModel.findOne({ ISBN: book.ISBN });
    if (existingBook) {
      throw new Error("Book with this ISBN already exists");
    }
    return await BookModel.create(book);
  }

  public async find() {
    return await BookModel.find();
  }

  public async findByTitle(title: string) {
    return await BookModel.find({ title: title });
  }

  public async update(id: string, book: Partial<IBook>) {
    const updatedBook = await BookModel.findByIdAndUpdate(id, book, {
      new: true,
    });
    return updatedBook;
  }

  public async delete(id: string) {
    const deletedBook = await BookModel.findByIdAndDelete(id);
    return deletedBook;
  }
}
