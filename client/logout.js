import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import { browserHistory } from 'react-router'
import $ from 'jquery';


export default class Logout extends React.Component {
  constructor (){
    super();
    this.state = {breadyWoman:false,needFORM:false}
  }
  onSubmit(evt) {
    console.log('WE LEAVIN')
    localStorage.setItem('user','');
    localStorage.setItem('expenses','');
    localStorage.setItem('userId','');
    const path = `/`;
    browserHistory.push(path);
}
  onBread(){
    console.log('TAKE ME TO THE BREAD THOUGH, PLEASE JESUS')
    this.setState({breadyWoman:true})
  }
  promptForm(){
    this.setState({needFORM:true});
    console.log('prompt form firing');
  }
  
  render() {
    let BREADME, leaveFORM;
    if (this.state.breadyWoman){
      BREADME = <img className="breadyLady" id="bgVideo" src="./client/womanBread.gif" />
    }
    if(this.state.needFORM){
      leaveFORM = <form onSubmit={this.onSubmit}>
          <input className="leaving"type="text" placeholder="WHY YOU LEAVIN BRED..."/>
        </form>
    }

    return (
      <div>
        {BREADME}
        <div className="logoutContainer">
          <h1>YOU WANNA LEAVE BRED?</h1>
          <div className="buttonContainer">
          <button onClick={this.promptForm.bind(this)} id ='yeah' className="LOGOUTBUTTON1">...Yeah</button>
          <div onClick={this.onBread.bind(this)}className="LOGOUTBUTTON"><a><span className="BIGSHIT">NAH</span><br/>I LOVE BRED</a></div>
          </div> 
          {leaveFORM}
        </div>
      </div>
    )
  }
  }

