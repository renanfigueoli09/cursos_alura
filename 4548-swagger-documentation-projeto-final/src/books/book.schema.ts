import { Schema, model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  ISBN: string;
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
});

const BookModel = model("Books", bookSchema);

export default BookModel;
