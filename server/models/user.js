// server/models/user.js
var Expenses = require('./expenses');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://vpcdhjqn:3KxZSDy8OIqQiamCwDzyUZJ9zLiAJnTm@elmer.db.elephantsql.com:5432/vpcdhjqn'
const sequelize = new Sequelize(dbUrl);


const User = sequelize.define('usergroup', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  income: {
    type: Sequelize.DECIMAL(18,2)
  }
});
sequelize.sync();
module.exports = User;
