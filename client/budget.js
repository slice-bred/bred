import React from 'react';
import { VictoryPie } from 'victory';
import { VictoryBar } from 'victory';
import { VictoryLine } from 'victory';

function Budget(props){
  let hi = props.budgetData[0];
  return (
    <div className = "Budget">
      <h3>Budget: {props.budgetName}</h3>

      <VictoryPie
        data={[
         {x: "Transportation", y: props.budgetData[0]},
         {x: "Bills", y: props.budgetData[1]},
         {x: "Food", y: props.budgetData[2]},
         {x: "Entertainment", y: props.budgetData[3]},
         {x: "Other", y: props.budgetData[4]}
         ]}
      />
      <VictoryBar
         height={500}
        padding={75}
        style={{
          labels: {fontSize: 20}
         }}
        data={[
        {x: 1, y: 1, fill: "gold", label: props.userId[0]},
        {x: 2, y: 3, fill: "orange", label: props.userId[1]},
        {x: 3, y: 6, fill: "orange", label: props.userId[1]}
        ]}
        />
        </div>
  )
}

module.exports = Budget