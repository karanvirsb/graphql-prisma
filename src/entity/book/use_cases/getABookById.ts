import { getABookById } from "../db";

export default function makeGetABookById({
  getABookById,
}: {
  getABookById: getABookById;
}) {
  return async function getABookByIdUseCase({ id }: { id: number }) {
    if (Number.isNaN(id)) throw Error("Id is a number that must be provided.");

    return await getABookById({ id });
  };
}
