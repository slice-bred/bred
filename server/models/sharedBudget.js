var User = require('./user');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://vpcdhjqn:3KxZSDy8OIqQiamCwDzyUZJ9zLiAJnTm@elmer.db.elephantsql.com:5432/vpcdhjqn'
const sequelize = new Sequelize(dbUrl);

const sharedBudget = sequelize.define('sharedbudgetzs', {
  budgetid: {
    type: Sequelize.STRING
  },
  username: {
   type: Sequelize.STRING
 }
 
});


//sequelize.sync()

// CREATE TABLE sharedBudeget (
//  _id SERIAL PRIMARY KEY, 
//  budgetID varchar, 
//  user varchar  
//  )
module.exports = sharedBudget;
