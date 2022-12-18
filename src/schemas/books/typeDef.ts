import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { AuthorType } from "../authors/typedef";
import { LibraryType } from "../libraries/typeDef";
import { PublisherType } from "../publishers/typeDef";

export const formatType = new GraphQLObjectType({
  name: "format",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    url: { type: GraphQLString },
  }),
});

export const BookType = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: { type: GraphQLInt },
    asin: { type: GraphQLString },
    ISBN10: { type: GraphQLString },
    author: { type: AuthorType },
    currency: { type: GraphQLString },
    description: { type: GraphQLString },
    final_price: { type: GraphQLFloat },
    format: { type: new GraphQLList(formatType) },
    image_url: { type: GraphQLString },
    images_count: { type: GraphQLInt },
    item_weight: { type: GraphQLString },
    product_dimensions: { type: GraphQLString },
    rating: { type: GraphQLString },
    reviews_count: { type: GraphQLInt },
    publisher: { type: PublisherType },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    categories: { type: new GraphQLList(GraphQLString) },
    libraries: { type: LibraryType },
  }),
});
