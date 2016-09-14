import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'
import $ from 'jquery';

export default class Profile extends React.Component {

  refreshData() {
    const username = JSON.parse(localStorage.getItem('user')).username;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/user/' + username + '/expense'
    })
    .done(function(data) {
      document.getElementById('rec-expenses-list').innerHTML = '';
      data.forEach((exp) => {
        if(exp.recurring) {
          let listElem = document.createElement('div');
          listElem.innerHTML = exp.category + '  $' + exp.amount;
          document.getElementById('rec-expenses-list').appendChild(listElem);
        }
      })
    })    
  }

  submit(e) {
    e.preventDefault();

    //create object from the values of the inputs
    const amount = e.target.elements[0].value;
    const category = e.target.elements[1].value;
    const username = JSON.parse(localStorage.getItem('user')).username;

    const expenseData = {
    	amount: amount,
    	category: category,
    	username: username,
      recurring: true
    }
    //post request to send the new expense to the database
		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/api/user/' + username + '/expense',
	    data: expenseData
	  })
	  .done(function(data) {
      //if successful set items to local storage
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/user/' + username + '/expense'
      })
      .done(function(data) {
        document.getElementById('rec-expenses-list').innerHTML = '';
        data.forEach((exp) => {
          if(exp.recurring) {
            let listElem = document.createElement('div');
            listElem.innerHTML = exp.category + '  $' + exp.amount;
            document.getElementById('rec-expenses-list').appendChild(listElem);
          }
        })
        localStorage.setItem("expenses", JSON.stringify(data));
      }) 
	  });

    //resets field
    e.target.elements[0].value = "";
  }

  render() {
    let user = JSON.parse(localStorage.getItem("user")).username;
    let email = JSON.parse(localStorage.getItem("user")).email;
    let income = JSON.parse(localStorage.getItem("user")).income;
    this.refreshData();
    return (
    	<div>
    		<h1>Hello {user}!</h1>
        <h2>Your email address: {email}</h2>
        <h2>Your income: {income}!</h2>
    	</div>
    )
  }
}


