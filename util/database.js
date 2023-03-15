const Sequilize = require("sequelize");

const sequelize = new Sequilize("shop_nodejs", "root", "miluzita", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
