export default `

type User{
  id: Int!
  username: String
  pic: String
  contributions: Int
  tags: [Tag]
}

type Query{
  getUser(id: Int!): User!
  allUsers: [User!]!
}

type Mutation{
  createUser(username: String, token: String!, pic: String): User!
}
`;
