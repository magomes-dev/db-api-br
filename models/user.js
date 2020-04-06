module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        hash: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: DataTypes.DATE
    },{
        tableName: 'users'
    });


    return User;
}