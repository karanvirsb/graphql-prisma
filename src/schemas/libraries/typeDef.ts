import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const LibraryType = new GraphQLObjectType({
  name: "library",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
