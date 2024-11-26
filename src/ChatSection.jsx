import * as React from 'react';
import { useState, useRef , useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ChatSection.css';
import Question from './Question';
import Answer from './Answer';
import axios from 'axios';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import MedicationIcon from '@mui/icons-material/Medication';

// BASE_URL = 'https://dr-gpt-backend.onrender.com'

function ChatSection(){
    const listRef = useRef(null);
    let [question, setQuestion] = useState('');
    let [Msg , setMsg] = useState([{ type : "Answer" , text : "Hello I'm Dr GPT. How can I help you?"} ])
    let [Loading, setLoading] = useState(false);
    
    useEffect(() => {
        // bring the last item into view        
        listRef.current?.lastElementChild?.scrollIntoView()
    }, [Msg]);

    function getAnswer(){
        axios({
            method: 'post',
            url: 'https://dr-gpt-backend.onrender.com/chat',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
              chatmsg : question,
            }
          }).then((res)=>{
            const newAns = {type : "Answer", text: res.data.answer};
            setMsg((prevmsg)=>(
                [...prevmsg, newAns]
            ))
            setLoading(false);
          });
    }

       function HandleSubmit(e){
        e.preventDefault();
        const newItem = { type : "Question" , text : question};
        setMsg((prevmsg)=>
            [...prevmsg , newItem ])
        getAnswer();
        setQuestion("");
        setLoading(true)
    }


    function handleChange(e){
        let newQues = e.target.value;
        setQuestion(newQues);
    }

    function clearchat(){
        setMsg((prevdata)=>{
           return [{}];
        })
    }

    return (
        <div className="ChatSection">

            <div className='chatRes' ref={listRef}>
            {Msg.map((message)=>{
                if(message.type == "Question"){
                    return <Question msgQ={ message.text}/>
                }else{
                    return <Answer msgA={ message.text}/>
                }
             
            })}

            {Loading && <div className='loading' >
                
                <DotLottieReact
                 src="https://lottie.host/d1f14225-7127-46c3-8bb2-83f64907213a/wM0zGrGSlG.lottie"
                 loop
                autoplay/> 
                Loading...
              </div>}

        </div>

             <form className='InputBox' onSubmit={HandleSubmit} >
             <MedicationIcon onClick={clearchat} fontSize='large'  className='MedicationIcon'/>
            <Box sx={{ width: 650, maxWidth: '100%' }} >
             <TextField fullWidth label="Chat with Dr-GPT" id="fullWidth" value={question} onChange={handleChange} />
            </Box>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </form>
        </div>
    )
}

export default ChatSection;

