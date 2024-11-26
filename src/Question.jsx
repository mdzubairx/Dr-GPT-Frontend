import React from 'react'
import './Question.css';

function Question({msgQ}){
  return(
    <div className='Question'>&#9734; &nbsp;  {msgQ}</div>
  )
}

export default Question;