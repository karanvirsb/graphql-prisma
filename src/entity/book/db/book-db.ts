import { db } from ".";
import { Book, Author, Publisher, Library } from "@prisma/client";

export type getBooks = ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) => Promise<
  (Book & {
    author: Author;
    publisher: Publisher;
    libraries: Library;
  })[]
>;

export default function makeBookDb({ db }: db) {
  return Object.freeze({
    getBooks,
    getBooksByTitle,
    getABookById,
  });

  async function getBooks({
    limit = 10,
    page,
  }: {
    limit: number;
    page: number;
  }) {
    return await db.findMany({
      skip: page * limit,
      take: limit,
      orderBy: { title: "asc" },
      include: {
        author: true,
        publisher: true,
        libraries: true,
      },
    });
  }

  async function getBooksByTitle({
    title = "",
    page,
    limit = 10,
  }: {
    title: string;
    page: number;
    limit: number;
  }) {
    return await db.findMany({
      where: { title: { contains: title } },
      take: limit,
      skip: page * limit,
      orderBy: {
        title: "asc",
      },
    });
  }

  async function getABookById({ id }: { id: number }) {
    return await db.findFirst({
      where: { id: { equals: id } },
      include: { author: true, libraries: true, publisher: true },
    });
  }
}
