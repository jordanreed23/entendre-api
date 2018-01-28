export default {
  Query: {
    getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.User.findAll(),
    loginUser: (parent, { username, token }, { models }) =>
      models.User.findOne({ where: { username, token } }),
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
  },
};
