module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define('Serie', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        createdAt: DataTypes.DATE
    },{
        tableName: 'series'
    });

    return Serie;
}