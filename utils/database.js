require('dotenv').config({ path: '../expenseapppassword/.env' });
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;