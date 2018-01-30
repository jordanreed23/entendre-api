import { Sequelize, Op } from 'sequelize';
export default {
  Query: {
    getSong: (parent, args, { models }) => models.Song.findOne({
      where: { artist_id: args.artist_id,
        name: args.name, album_id: args.album_id },
      include: [{
        model: models.Tag,
        // as: 'album',
        // where: { artist_id:  }
      }],
    }),
    allSongs: (parent, args, { models }) => models.Album.findAll({
      order: [
        ['unique_words', 'DESC'],
      ],
      limit: 10,
      where: { unique_words: { [Op.ne]: null } } }),
  },
  Mutation: {
    addSong: (parent, args, { models }) => models.Song.create(args),
  },
};
