export default(sequelize, DataTypes) => {
  const Album = sequelize.define('album', {
    name: DataTypes.STRING,
    art: DataTypes.STRING,
    unique_words: DataTypes.INTEGER,
    year: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  Album.associate = (models) => {
    Album.belongsTo(models.Artist, {
      foreignKey: 'artist_id',
    });
    Album.hasMany(models.Song, {
      foreignKey: 'album_id',
    });
  };

  return Album;
};
// join albums on albums.artist_id = artists.id where artists.name = ?
