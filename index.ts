import { ApolloServer } from "apollo-server";
import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/UserResolver";
import 'dotenv/config'

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

main();
