module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define('Serie', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
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