import makeGetABookById from "./getABookById";
import { prismaMock } from "../../../__test__/prisma/singleton";
import makeBookDb from "../db/book-db";

describe("Getting a book by id", () => {
  const BookDb = makeBookDb({ db: prismaMock.book });
  const getABookById = makeGetABookById({ getABookById: BookDb.getABookById });

  test("SUCCESS: Book found by id.", async () => {
    const foundBook = await getABookById({ id: 1000 });
    expect(foundBook?.id).toBe(1000);
  });
});
