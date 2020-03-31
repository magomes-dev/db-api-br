module.exports = (sequelize, DataTypes) => {
    const Planet = sequelize.define('Planet', {
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        createdAt: DataTypes.DATE
    },{
        tableName: 'planets'
    });

    return Planet;
}