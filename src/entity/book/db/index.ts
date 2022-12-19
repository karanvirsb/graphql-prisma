import prisma from "../../../../prisma";
import makeBookDb from "./book-db";

export type db = {
  db: typeof prisma.book;
};

const BookDb = makeBookDb({ db: prisma.book });
export default BookDb;
