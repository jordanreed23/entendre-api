export default `
type Song{
  id: Int!
  name: String!
  rank: Int
  unique_words: Int
  tags: Int!
  album: Album!
  artist: Artist!
  lyrics: String
}
`;
