export default (sequelize, DataTypes) => {
  const Artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    vocab: DataTypes.INTEGER,
    tags: DataTypes.INTEGER,
    art: DataTypes.STRING,
    unique_words: DataTypes.INTEGER,
  });

  Artist.associate = (models) => {
    Artist.belongsToMany(models.Album, {
      through: 'artist_album',
      foreignKey: 'artist_id',
    });
  };

  return Artist;
};
