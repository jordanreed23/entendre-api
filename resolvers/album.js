import { Sequelize, Op } from 'sequelize';

export default {
  Query: {
    // getArtist: (parent, args, { models }) => models.Artist.findOne(),
    getAlbum: (parent, args, { models }) => models.Album.findOne({
      order: [
        ['year', 'DESC'],
      ],
      where: { artist_id: args.artist_id,
        name: args.name },
      include: [{
        model: models.Song,
        // as: 'album',
        // where: { artist_id:  }
      }],
    }),
    allAlbums: (parent, args, { models }) => models.Album.findAll({
      order: [
        ['unique_words', 'DESC'],
      ],
      limit: 3,
      where: { vocab: { [Op.ne]: null } } }),
  },
  Mutation: {
    addAlbum: (parent, args, { models }) => models.Album.create(args),
    updateAlbumVocab: (parent, args, { models }) => {
      models.Album.update({ unique_words: args.unique_words },{ where: { id: args.id } });

      return {id: args.id, unique_words: args.unique_words}
    },
  },
};
