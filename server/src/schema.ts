import gql from "graphql-tag";
// converts our strings into the format that Apollo expects
// and enables syntac highlighting

export const typeDefs = gql`
"The fields in this type are ENTRY POINTS into our schema"
type Query {
    "Get non-nullable array (of non-nullable tracks) for homepage grid"
    spaceCats: [SpaceCat]
      "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}

"A track is a group of Modules that teaches about a specific topic"
type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

"A SpaceCat Type"
type SpaceCat {
   "Non-nullable: id, title"
    id: ID!
    "The cat's name"
    name: String!
    "The cat's age, can be null"
    age: Int
    "Can be null missions"
    missions: [Mission]
}

type Mission {
    id: ID!
    name: String!
    description: String!
}
`