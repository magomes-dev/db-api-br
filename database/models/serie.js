module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define('Serie', {
        name: DataTypes.STRING(100),
        description: DataTypes.STRING(2000),
        image: DataTypes.STRING,
        createdAt: DataTypes.DATE
    },{
        tableName: 'series'
    });

    Serie.associate = (models) => {
        Serie.hasMany(
            models.Character, 
            {
                foreignKey: 'originalSerieId',
                as: 'characters'
            }
        );
    }

    return Serie;
}