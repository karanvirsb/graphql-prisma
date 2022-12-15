import {
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldResolver,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { AuthorResolver } from "./authors/author.resolvers";

export type fields = {
  [key: string]: {
    type: GraphQLOutputType;
    args: GraphQLFieldConfigArgumentMap | undefined;
    resolve: GraphQLFieldResolver<any, any, any, unknown> | undefined;
  };
};

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
      args: { name: { type: GraphQLString } },
      resolve: (parent, args) => "world",
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
