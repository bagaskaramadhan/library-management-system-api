const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUsername,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: config.dbDialect,
    logging: false,
  }
);

module.exports = sequelize;
