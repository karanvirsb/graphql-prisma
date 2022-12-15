import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { AuthorResolver } from "./authors/author.resolvers";

export type fields = {
  [key: string]: {
    type: any;
    args: {
      [key: string]: {
        type: any;
      };
    };
    resolve: (parent: any, args: any) => void;
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
      resolve: () => "world",
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
