import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const AuthorType = new GraphQLObjectType({
  name: "author",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});
