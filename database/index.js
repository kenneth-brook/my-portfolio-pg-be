const knex = require("kenx")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "portfolio_main",
  },
});

module.exports = knex;
