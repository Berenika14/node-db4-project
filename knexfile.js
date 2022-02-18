// Update with your config settings
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true, // needed for sqlite
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "/data/seeds" },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/cook-book.db3" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/cook-book.db3" },
  },
  production: {},
};