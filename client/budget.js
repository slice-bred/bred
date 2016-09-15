import React from 'react';
import { VictoryPie } from 'victory';

function Budget(props){
  console.log(props)
  return (
    <div className = "Budget">
      <h3>Budget: {props.text}</h3>
      <VictoryPie
  // Try changing the data
  data={[
    {x: "Transportation", y: 62},
    {x: "Rent", y: 91},
    {x: "Food", y: 55},
    {x: "Utilities", y: 55},
  ]}
/>
    </div>
  )
}

module.exports = Budget