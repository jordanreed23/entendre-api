export default `
type Song{
  id: Int!
  name: String
  rank: Int
  unique_words: Int
  tags: [Tag]
  album: Album
  artist: Artist
  lyrics: String
}

type Query{
  getSong(artist_id: Int!, album_id: Int!, name: String!): Song
  allSongs(artist_id: Int!): [Song]
}

type Mutation {
  addSong(name: String!, artist_id: Int!, album_id: Int!, unique_words: Int!, lyrics: String!): Song
}
`;
