require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
};
