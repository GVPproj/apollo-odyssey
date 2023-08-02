import gql from "graphql-tag";
// converts our strings into the format that Apollo expects
// and enables syntac highlighting

export const typeDefs = gql`
"The fields in this type are ENTRY POINTS into our schema"
type Query {
    "Get non-nullable array (of non-nullable tracks) for homepage grid"
    spaceCats: [SpaceCat]
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