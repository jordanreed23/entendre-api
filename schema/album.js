export default `
type Album{
  id: Int!
  name: String
  rank: Int
  art: String
  unique_words: Int
  artist: Artist
  songs: [Song]
  year: Int
  description: String
}

type Query{
  getAlbum(artist_id: Int!, name: String!): Album
  allAlbums: [Album]
}

type Mutation {
  addAlbum(name: String!, art: String, artist_id: Int!, year: String, description: String): Album
  updateAlbumVocab(id: Int!, unique_words: Int!): Album
}
`;
