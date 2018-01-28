export default (sequelize, DataTypes) => {
  const Artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    vocab: DataTypes.INTEGER,
    tags: DataTypes.INTEGER,
    art: DataTypes.STRING,
    bio: DataTypes.TEXT,
  });

  Artist.associate = (models) => {
    Artist.hasMany(models.Album, {
      foreignKey: 'artist_id',
    });
  };

  return Artist;
};
