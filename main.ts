import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

try{
  const server = new ApolloServer({

  });

  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
  
}catch(e){
  console.error(e)
}