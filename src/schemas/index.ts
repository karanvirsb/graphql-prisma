import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { AuthorResolver } from "./authors/author.resolvers";

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...AuthorResolver,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "world",
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
