import './Home.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 



function Home(){
    const navigate = useNavigate();
    const location = useLocation(); 

    function gotoChat(){
        navigate("/chat")
    }

    function bodyClassName(){
        if(location.pathname === '/'){
            return home-body;
        }
        return '';
    }

    return(
        // <body className={bodyClassName()}>
            
        <div className='Home'>
        <div className="Intro">
        <h2>WELCOME TO </h2>
        <h1>DR-GPT</h1>
        <h3> Your AI-powered doctor assistant, built with ChatGPT API, ready to provide medical insights, answer health queries, and support your wellness journey. Accessible anytime, anywhere!</h3>
        <Button variant="outlined" className='btn' onClick={gotoChat}  style={{color: 'green', borderColor: 'green' , padding: '10px 10px 10px 10px'}}>Chat now</Button>
        </div>


          <DotLottieReact
          src="https://lottie.host/786518c8-a20a-4776-9510-61e9182d09c9/AURnFnnfVD.lottie"
           loop
           autoplay
          />

        </div>
        // </body>
    )
}

export default Home;