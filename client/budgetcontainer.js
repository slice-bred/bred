import React from 'react';
import Budget from './budget';
import { VictoryPie } from 'victory';

function BudgetContainer(props){
	console.log(props);
	console.log(props.userId)
  return (
    <div className = "BudgetContainer">
				{
					props.budgets.map((budget, i) => {
						return (
							<Budget
								key={i}
								budgetName={budget[i]}
								budgetData={props.budgetData[i]}
								userId={props.userId[i]} 
							/>
						);
					})
				} 
    </div>
  )

}

module.exports = BudgetContainer