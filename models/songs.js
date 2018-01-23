export default (sequelize, DataTypes) => {
  const Song = sequelize.define('song', {
    name: DataTypes.STRING,
    rank: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    unique_words: DataTypes.INTEGER,
    lyrics: DataTypes.TEXT,
  });

  Song.associate = (models) => {
    Song.belongsTo(models.Album, {
      foreignKey: 'album_id',
    });
    Song.belongsTo(models.Artist, {
      foreignKey: 'artist_id',
    });
  };

  return Song;
};
