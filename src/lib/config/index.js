require("dotenv").config();

module.exports = Config = {
  dbHost: process.env.DBHOST || "",
  dbUsername: process.env.DBUSER || "",
  dbName: process.env.DBNAME || "",
  dbPassword: process.env.DBPASS || "",
  dbDialect: process.env.DBMS || "",
  port: process.env.PORT || "",
};
