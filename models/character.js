module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('Character', {
        name: DataTypes.STRING,
        gender: DataTypes.STRING(1),
        image: DataTypes.STRING,
        speciesId: DataTypes.INTEGER,
        originPlanetId: DataTypes.INTEGER,
        originalSerieId: DataTypes.INTEGER,
        createdAt: DataTypes.DATE
    },{
        tableName: 'characters'
    });

    Character.associate = (models) => {
        Character.belongsTo(models.Species, {foreignKey: 'speciesId', as: 'species'})        
        Character.belongsTo(models.Planet, {foreignKey: 'originPlanetId', as: 'planet'})        
        Character.belongsTo(models.Serie, {foreignKey: 'originalSerieId', as: 'serie'})
      };    
    
    return Character;
}