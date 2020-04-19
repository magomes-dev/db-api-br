module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: DataTypes.STRING(30),
        firstName: DataTypes.STRING(30),
        lastName: DataTypes.STRING(30),
        hash: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: DataTypes.DATE
    },{
        tableName: 'users'
    });


    return User;
}