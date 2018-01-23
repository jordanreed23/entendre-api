export default(sequelize, DataTypes) => {
  const Album = sequelize.define('album', {
    name: DataTypes.STRING,
    rank: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    art: DataTypes.STRING,
    unique_words: DataTypes.INTEGER,
  });

  Album.associate = (models) => {
    Album.belongsToMany(models.Artist, {
      through: 'artist_album',
      foreignKey: 'album_id',
    });
  };

  return Album;
};
