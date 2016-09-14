var User = require('./user');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://vpcdhjqn:3KxZSDy8OIqQiamCwDzyUZJ9zLiAJnTm@elmer.db.elephantsql.com:5432/vpcdhjqn'
const sequelize = new Sequelize(dbUrl);

const Expenses = sequelize.define('expenses', {
  title: {
    type: Sequelize.STRING
  },
  category: {
   type: Sequelize.STRING
  },
  amount: {
   type: Sequelize.STRING
  },
  date: {
   type: Sequelize.STRING
  },
  recurring: {
   type: Sequelize.BOOLEAN
 },
 username: {
   type: Sequelize.STRING
 }
});

// sequelize.sync()


module.exports = Expenses;
