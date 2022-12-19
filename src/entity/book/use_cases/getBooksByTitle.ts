import { getBooksByTitle } from "../db";

export default function makeGetBooksByTitle({
  getBooksByTitle,
}: {
  getBooksByTitle: getBooksByTitle;
}) {
  return async function getBooksByTitleUseCase({
    title,
    limit = 10,
    page,
  }: {
    title: string;
    limit: number;
    page: number;
  }) {
    if (Number.isNaN(limit)) throw Error("Limit needs to be a number.");
    if (Number.isNaN(page)) throw Error("Page needs to be a number.");
    if (title !== typeof String) throw Error("Title must be a string.");
    if (title.trim().length <= 1)
      throw Error("Title must contain atleast 1 character.");
    return await getBooksByTitle({ title, limit, page });
  };
}
