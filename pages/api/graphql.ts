import { ApolloServer } from "@apollo/server";
import { GraphQLSchema } from "graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  schema: new GraphQLSchema({}),
});

export default startServerAndCreateNextHandler(server);
