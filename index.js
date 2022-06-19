"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = require("./src/resolvers/UserResolver");
require("dotenv/config");
async function main() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [UserResolver_1.UserResolver],
        emitSchemaFile: path_1.default.resolve(__dirname, "schema.graphql"),
    });
    const server = new apollo_server_1.ApolloServer({
        schema,
    });
    const { url } = await server.listen();
    console.log(`Server running on ${url}`);
}
main();
