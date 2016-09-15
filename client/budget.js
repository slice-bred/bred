import React from 'react';
import { VictoryPie } from 'victory';
import { VictoryBar } from 'victory';
import { VictoryLine } from 'victory';

function Budget(props){
  console.log(props)
  return (
    <div className = "Budget">
      <h3>Budget: {props.text}</h3>
      <VictoryPie
        data={[
         {x: "Transportation", y: 62},
         {x: "Rent", y: 91},
         {x: "Food", y: 55},
         {x: "Utilities", y: 55},
         ]}
      />
      <VictoryBar
         height={500}
        padding={75}
        style={{
          labels: {fontSize: 20}
         }}
        data={[
        {x: 1, y: 1, fill: "gold", label: "SO"},
        {x: 2, y: 3, fill: "orange"},
        {x: 3, y: 2, fill: "tomato", label: "WOW"},
        {x: 4, y: 4, fill: "pink"},
        {x: 5, y: 3, fill: "magenta", label: "SUCH"},
        {x: 6, y: 5, fill: "purple"},
        {x: 7, y: 6, fill: "blue", label: "LABEL"}
        ]}
        />
      <VictoryLine
         data={[
         {x: 0, y: 1},
         {x: 1, y: 3},
         {x: 2, y: 2},      
         {x: 3, y: 4},
         {x: 4, y: 3},
         {x: 5, y: 5}
       ]}
      />
        </div>
        
  )
}

module.exports = Budget