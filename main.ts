import {ApolloServer} from "npm:@apollo/server@4.9.5";
import {startStandaloneServer} from "npm:@apollo/server@4.9.5/standalone";
import { typeDefs } from "./gql/schema.ts";
import { Contact } from "./resolvers/Contact.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Query } from "./resolvers/query.ts";



const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Contact
  },
  },
);

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);    