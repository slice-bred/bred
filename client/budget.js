import React from 'react';

function Budget(props){
  console.log(props)
  return (
    <div className = "Budget">
      <h3>Budget: {props.text}</h3>
    </div>
  )
}

module.exports = Budget