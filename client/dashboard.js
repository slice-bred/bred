import React from 'react';
import ReactDOM from 'react-dom';
import Pie from './category_pie'
import TimeChart from './time_chart'
import ProgressBar from './progress_bar'
import Expense from './expense'
import Nav from './nav'
import BudgetContainer from './budgetcontainer'
import Budget from './budget'
import {Router, Route, Link} from 'react-router'

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets:[1,2,3],
      counter: 0
    }
  }

  handleNewBudget() {

	}

  render() {

    let user = JSON.parse(localStorage.getItem("user")).username;
    return (
      <div>
        <h2>{user} Budgets</h2>
        <button type="submit" onClick={this.handleNewBudget.bind(this)}>Create Budget</button>
        <BudgetContainer budgets={this.state.budgets} />
      </div>
    )
  }
}
