//user-controller.js
'use strict'
const User = require('../models/user');
const sharedBudget = require('../models/sharedBudget')
const expenses = require('../models/expenses');
const pg = require('pg');

var client = new pg.Client('postgres://vpcdhjqn:3KxZSDy8OIqQiamCwDzyUZJ9zLiAJnTm@elmer.db.elephantsql.com:5432/vpcdhjqn');
client.connect();

function signup(req, res) {
	User.create({
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		income: req.body.income
	}).then(function (user) {
		console.log('user created');
		// res.USERID = user.id;
		// res.username = req.body.username;
		res.send({userID: user.id, username: req.body.username});
	}).catch(function(err) {
		console.log('error', err);
	});
}

function getUser(req, res, next) {
 	console.log('are we in getUser req.params.username', req.body);
	 User.find({ where: {
    	username: req.body.username
  	}
  }).then(function(result) {
		res.userInfo = result;
		next();
	}).catch(function(err) {
		console.log('error', err);
	});
}

function getBIDS(req, res){
	var results;
	var query1 = client.query('SELECT * FROM expenses WHERE budgetid = 0')
	console.log('in the BIDS');
	query1.on('end', function(resultz){
					results = resultz;
					client.end();
					return res.send({userInfo:res.userInfo,expenses:results});})
	console.log('in the bids',results);
	
}
module.exports = { signup, getUser, getBIDS };
