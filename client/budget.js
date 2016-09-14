import React from 'react';

function Budget(props){
  console.log(props)
  return (
    <div className = "Budget">
      <div>{props.text}</div>
    </div>
  )
}

module.exports = Budget