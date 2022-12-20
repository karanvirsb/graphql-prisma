import casual from "casual";

export function mockBook({
  id,
  author_id,
  library_id,
  publisher_id,
}: {
  id: number;
  author_id: number;
  library_id: number;
  publisher_id: number;
}) {
  return {
    id,
    asin: casual.integer(100000, 1000000) + casual.letter,
    ISBN10: casual.integer(100000, 1000000) + casual.letter,
    author_id: 1,
    currency: "USD",
    description: casual.catch_phrase,
    final_price: casual.random,
    format: JSON.stringify([
      { name: casual.name, price: "$" + casual.integer(), url: casual.url },
    ]),
    image_url: casual.url,
    images_count: casual.integer(),
    item_weight: casual.name,
    product_dimensions: casual.name,
    rating: casual.name,
    reviews_count: casual.random,
    publisher_id: 1,
    title: casual.title,
    url: casual.url,
    categories: [...new Array(3)].map((i) => casual.name),
    library_id: 1,
  };
}
