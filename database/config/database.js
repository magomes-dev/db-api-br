module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'db-api-br',
    host: 'localhost',
    dialect: 'mariadb',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_KEY,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
  },
};
