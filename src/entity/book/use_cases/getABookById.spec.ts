import makeGetABookById from "./getABookById";
import { prismaMock } from "../../../__test__/prisma/singleton";
import makeBookDb from "../db/book-db";
import { mockBook } from "../../../__test__/entity/book";

describe("Getting a book by id", () => {
  const BookDb = makeBookDb({ db: prismaMock.book });
  const getABookById = makeGetABookById({ getABookById: BookDb.getABookById });

  test("SUCCESS: Book found by id.", async () => {
    const book = mockBook({
      id: 4,
      author_id: 1,
      library_id: 2,
      publisher_id: 3,
    });

    // const addedBook = await prismaMock.book.create({ data: book });
    prismaMock.book.findFirst.mockResolvedValue(book);

    // const foundBook = await prismaMock.book.findMany();
    const foundBook = await getABookById({ id: book.id });

    expect(foundBook?.id).toBe(book.id);
  });

  test("ERROR: Book does not exist.", async () => {
    const book = mockBook({
      id: 4,
      author_id: 1,
      library_id: 2,
      publisher_id: 3,
    });

    // const addedBook = await prismaMock.book.create({ data: book });
    // prismaMock.book.findFirst.mockResolvedValue(book);

    // const foundBook = await prismaMock.book.findMany();
    const foundBook = await getABookById({ id: 0 });

    expect(foundBook).toBe(undefined);
  });
});
