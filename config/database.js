require('dotenv').config();
const { Sequelize } = require('sequelize');

if (!process.env.DATABASE_URL) {
  throw new Error('Falta DATABASE_URL en el archivo .env');
}

const connection = new URL(process.env.DATABASE_URL);

const sequelize = new Sequelize(
  connection.pathname.replace('/', ''), // database
  connection.username,                  // username
  connection.password,                  // password
  {
    host: connection.hostname,
    port: connection.port || 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

module.exports = sequelize;