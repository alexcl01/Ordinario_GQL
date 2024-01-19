import {ApolloServer} from "npm:@apollo/server@4.9.5";
import {startStandaloneServer} from "npm:@apollo/server@4.9.5/standalone";
import mongoose from "npm:mongoose@8.0.1";
import { typeDefs } from "./gql/schema.ts";
import { Contact } from "./resolvers/Contact.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Query } from "./resolvers/query.ts";

const MONGO_URL = "mongodb+srv://acastellanol1:Acl650537271@clusterquinto.qmjbzqt.mongodb.net/OrdinariaGQL";
if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

// Connect to MongoDB
await mongoose.connect(MONGO_URL);

console.info("🚀 Connected to MongoDB");

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