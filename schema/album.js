export default `
type Album{
  id: Int!
  name: String!
  rank: Int
  art: String!
  unique_words: Int
  artists: [Artist!]!
  songs: [Song!]!
}
`;
