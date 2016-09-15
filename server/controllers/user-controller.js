//user-controller.js
'use strict'
const User = require('../models/user');
const expenses = require('../models/expenses');


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

function getUser(req, res) {
 	console.log('are we in getUser req.params.username', req.body);
	 User.find({ where: {
    	username: req.body.username
  	}
  }).then(function(result) {
		console.log("SUCCEDED IN GETTING SHIT FROM SQL. from userController in getUser",result);
		return res.status('200').json(result);
	}).catch(function(err) {
		console.log('error', err);
	});
}

module.exports = { signup, getUser };
