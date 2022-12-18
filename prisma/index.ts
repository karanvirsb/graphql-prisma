import { PrismaClient } from "@prisma/client";
import { LoremIpsum } from "lorem-ipsum";
const prisma = new PrismaClient();
export default prisma;

import books from "../src/model/books.json";
import authors from "../src/model/authors.json";
import publishers from "../src/model/publisher.json";
import libraries from "../src/model/libraries.json";

const lorem = new LoremIpsum({ sentencesPerParagraph: { max: 4, min: 2 } });

async function main() {
  await createBooks();
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function createBooks() {
  const length = books.length;
  for (let i = 0; i < length; i++) {
    const book = books[i];
    const addBook = await prisma.book.create({
      data: {
        asin: book.asin,
        currency: book.currency,
        description: lorem.generateParagraphs(3),
        format: book.format,
        image_url: book.image_url,
        images_count: book.images_count,
        ISBN10: book.ISBN10,
        item_weight: book.item_weight,
        product_dimensions: book.product_dimensions,
        rating: book.rating,
        reviews_count: book.reviews_count,
        title: book.title,
        url: book.url,
        final_price: book.final_price,
        categories: book.categories,
        author: {
          connect: {
            id: book.author_id,
          },
        },
        libraries: {
          connect: {
            id: book.library_id,
          },
        },
        publisher: {
          connect: {
            id: book.publisher_id,
          },
        },
      },
    });
  }
}

async function clearBooks() {
  await prisma.book.deleteMany();
}
