import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./schema"
import { addMocksToSchema } from "@graphql-tools/mock"
import { makeExecutableSchema } from "@graphql-tools/schema"

async function startApolloServer(){
    // passing in our typeDefs to our new Apollo Server
    // const server = new ApolloServer ( {typeDefs} )

    // with mocks
    const server = new ApolloServer({
        schema: addMocksToSchema({
          schema: makeExecutableSchema({ typeDefs }),
          mocks, // passing our mock data to add
        }),
      })

    // startStandaloneServer returns a Promise, so we'll
    // await the result of it and pull out the url property
    const { url } = await startStandaloneServer(server)
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `)
}

const mocks = {
    Query: () => ({

        tracksForHome: () => [...new Array(6)],
    
      }),
    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
  }

startApolloServer()