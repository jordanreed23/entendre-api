export default `
type Artist{
  id: Int!
  name: String!
  art: String!
  vocab: Int
  tags: Int!
  albums: [Album!]!
  songs: [Song!]!
}
`;
