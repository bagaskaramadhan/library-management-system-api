const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./lib/config");
const routes = require("./app/appRoutes");
const sequelize = require("./lib/appMySQL");

app.use(bodyParser.json());
app.use("/", routes);

sequelize
  .sync()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`running on ${config.port}`);
    });
  })
  .catch((err) => console.log(err));
