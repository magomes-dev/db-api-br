module.exports = (sequelize, DataTypes) => {
  const Species = sequelize.define('Species', {
    name: DataTypes.STRING(100),
    description: DataTypes.STRING(2000),
    createdAt: DataTypes.DATE,
  },
  {
    tableName: 'species',
  });

  Species.associate = (models) => {
    Species.hasMany(
      models.Character,
      {
        foreignKey: 'speciesId',
        as: 'characters',
      },
    );
  };

  return Species;
};
