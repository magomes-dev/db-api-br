module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define('Planet', {
    name: DataTypes.STRING(100),
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  },
  {
    tableName: 'planets',
  });

  Planet.associate = (models) => {
    Planet.hasMany(models.Character, {
      foreignKey: 'originPlanetId',
      as: 'characters',
    });
  };

  return Planet;
};
