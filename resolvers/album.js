export default {
  Query: {
    // getArtist: (parent, args, { models }) => models.Artist.findOne(),
    getAlbum: (parent, args, { models }) => models.Album.findOne({
      where: { artist_id: args.artist_id,
        name: args.name },
      include: [{
        model: models.Song,
        // as: 'album',
        // where: { artist_id:  }
      }],
    }),
  },
  Mutation: {
    addAlbum: (parent, args, { models }) => models.Album.create(args),
  },
};
