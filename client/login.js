import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import { browserHistory } from 'react-router'
import $ from 'jquery';


export default class Login extends React.Component {

  onSubmit(evt) {
    var self
    evt.preventDefault()
    self = this
    const userName = evt.target.elements[0].value
    const password = evt.target.elements[1].value

    const value = {
      username: userName,
      password: password
    }
    console.log(userName,password);
    let stringData = JSON.stringify({username: userName});

    $.ajax({
        url : "http://localhost:3000/login",
        type: "POST",
        data : value,
        success: function(data, textStatus, jqXHR)
        { console.log('inside front end login, object passed from server is: ', data);
          //upon successful login make get reqeust to get user data after login
          
          localStorage.setItem('user',data.userInfo.username);
          localStorage.setItem('userId',data.userInfo.id);
          localStorage.setItem('expenses',data.expenses.rows);
          // console.log('These are our users credentials',data.username,data.id);
          //let username = JSON.parse(localStorage.getItem('user')).username;
        }
        }).then( function() {
            const path = `/dashboard/`
            browserHistory.push(path)
          });
        


  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="username"/> {' '}
          <input type="password" placeholder="password"/>{' '}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}
