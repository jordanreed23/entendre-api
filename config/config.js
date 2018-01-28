require('dotenv').config();

module.exports = {
  // development: {
  //   dialect: "sqlite",
  //   storage: "./db.development.sqlite"
  // },
  // test: {
  //   dialect: "sqlite",
  //   storage: ":memory:"
  // },
  // production: {
  //   connection: process.env.DATABASE_URL,
  //   // username: process.env.DB_USERNAME,
  //   // password: process.env.DB_PASSWORD,
  //   // database: process.env.DB_NAME,
  //   // host: process.env.DB_HOSTNAME,
  //   dialect: 'pg',
  // },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};
