export default {
  Mutation: {
    addTag: (parent, args, { models }) =>
      models.Tag.create(args),
  },
};
