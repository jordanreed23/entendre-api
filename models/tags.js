export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    index: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    votes: DataTypes.INTEGER,
    lyric: DataTypes.STRING,
    device: DataTypes.STRING,
  });

  Tag.associate = (models) => {
    Tag.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Tag.belongsTo(models.Song, {
      foreignKey: 'song_id',
    });
    // Tag.belongsTo(models.Device, {
    //   foreignKey: 'device_id',
    // });
  };

  return Tag;
};
