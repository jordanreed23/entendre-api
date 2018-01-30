export default `
type Tag{
  id: Int!
  user: User
  song: Song
  index: Int
  length: Int
  votes: Int
  lyric: String
  device: String
}

type Mutation {
  addTag(user_id: Int!, song_id: Int!, index: Int!, lyric: String!, device: String!): Tag
}
`;
