import { Sequelize, Op } from 'sequelize';

// const Op = Sequelize.Op;

export default {
  Query: {
    // getArtist: (parent, args, { models }) => models.Artist.findOne(),
    getArtist: (parent, args, { models }) => models.Artist.findOne({
      where: { name: args.name },
      include: [{
        order: [
          ['albums.year', 'DESC'],
        ],
        model: models.Album,
        include: [{
          model: models.Song,
        }],
        // as: 'album',
        // where: { artist_id:  }
      }],
    }),
    allArtists: (parent, args, { models }) => models.Artist.findAll({
      order: [
        ['vocab', 'DESC'],
      ],
      limit: 10,
      where: { vocab: { [Op.ne]: null } } }),
  },
  Mutation: {
    addArtist: (parent, args, { models }) =>
      models.Artist.create(args),
      // return {name: args.name},
    updateArtistVocab: (parent, args, { models }) => {
      models.Artist.update({ vocab: args.vocab },{ where: { id: args.id } });

      return {id: args.id, vocab: args.vocab}
  },
  },
};
