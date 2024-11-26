import React from 'react'
import './Answer.css'
import AssistantRoundedIcon from '@mui/icons-material/AssistantRounded';
import { TypeAnimation } from "react-type-animation";

function Answer({msgA}){
  return(
    <div className='Answer'> <AssistantRoundedIcon fontSize='small' className='AiIcon'/> &nbsp;&nbsp;&nbsp;&nbsp; 
    <TypeAnimation
    sequence={[msgA, 1]}
    speed={100} // Controls typing speed
    wrapper="span"
    repeat={0}
    cursor={false} />
  </div> 
    
  )
}

export default Answer;