import { ApolloServer } from "apollo-server";
import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(process.env.PORT, "0.0.0.0");

  console.log(`Server running on ${url}`);
}

main();
