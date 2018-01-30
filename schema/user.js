export default `

type User{
  id: Int
  username: String
  token: String
  pic: String
  contributions: Int
  tags: [Tag]
}

type Query{
  getUser(id: Int!): User
  loginUser(username: String, token: String!): User
  allUsers: [User!]!
}

type Mutation{
  createUser(username: String, token: String!, pic: String): User!
}
`;
