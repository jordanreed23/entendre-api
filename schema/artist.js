export default `
type Artist{
  id: Int!
  name: String
  art: String
  bio: String
  vocab: Int
  tags: Int
  albums: [Album]
  songs: [Song]
}

type Query{
  getArtist(name: String!): Artist
  allArtists: [Artist]
}

type Mutation{
  addArtist(name: String!, art: String, bio: String): Artist!
  updateArtistVocab(id: Int!, name: String, vocab: Int!): Artist!
}
`;
