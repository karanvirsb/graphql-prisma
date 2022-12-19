import { getBooks } from "../db";

export default function makePaginatedBooks({
  getPaginatedBooks,
}: {
  getPaginatedBooks: getBooks;
}) {
  return async function paginatedBooks({
    limit = 10,
    page,
  }: {
    limit: number;
    page: number;
  }) {
    if (Number.isNaN(limit)) throw Error("Limit needs to be a number.");
    if (Number.isNaN(page)) throw Error("Page needs to be a number.");
    return await getPaginatedBooks({ limit, page });
  };
}
