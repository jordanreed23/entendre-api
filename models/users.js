export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    token: {
      type: DataTypes.STRING,
      unique: true,
    },
    pic: DataTypes.STRING,
    contributions: DataTypes.INTEGER,
  });

  // User.associate = (models) => {
  //   User.belongsToMany(models.Tags, {
  //     through: 'tags',
  //     foreignKey: 'user_id',
  //   });
  // };

  return User;
};
