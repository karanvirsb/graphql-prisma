import { ApolloServer } from "@apollo/server";
import { addMocksToSchema } from "@graphql-tools/mock";
import assert from "assert";
import schemas from "..";
import mockAuthor from "../../__test__/entity/author";
import { mockBook } from "../../__test__/entity/book";
import mockLibrary from "../../__test__/entity/library";
import mockPublisher from "../../__test__/entity/publisher";
import { getABookByIdResolver } from "./getABookById.resolver";
import { BookType } from "./typeDef";

interface ContextValue {
  book: typeof BookType;
}

describe("Get a book by id resolver", () => {
  let author = mockAuthor({ id: 1 });
  let publisher = mockPublisher({ id: 2 });
  let library = mockLibrary({ id: 3 });
  test("returns book with given id 4", async () => {
    const book = mockBook({
      id: 4,
      author_id: 1,
      publisher_id: 2,
      library_id: 3,
    }) as any;
    book["library"] = library;
    book["author"] = author;
    book["publisher"] = publisher;

    const testServer = new ApolloServer<ContextValue>({
      schema: schemas,
    });

    const resp = await testServer.executeOperation(
      {
        query: `
      query getABookById($id: Int) {
          getABookById(id: $id) {
            id
            author {
              name
              image
              id
            }
            categories
            currency
            final_price
            format
            description
            ISBN10
            image_url
            item_weight
            libraries {
              address
              name
              phone
              id
            }
            product_dimensions
            rating
            reviews_count
            title
            url
            publisher {
              id
              name
              phone
            }
          }
        }
        `,
        variables: { id: 4 },
      },
      { contextValue: { book: book } }
    );
    expect(resp).toMatchSnapshot();
  });
});
