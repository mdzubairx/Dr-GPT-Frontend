import './SidePanel.css';
import Button from '@mui/material/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SidePanel(){
    const navigate = useNavigate();
    let [color , SetColor] = useState(false);

   function gotoHelp(){
    navigate("/help");
    }

    function gotoHome(){
        navigate("/");
    }


    function gotoPrivacy(){
        navigate("/PrivacyPolicy");
    }

  

    return(
        <div className="SidePanel">
            <h3 className='drgpt'>DR-GPT</h3>

        <div className='DoctorAnimie'>
        <DotLottieReact
           src="https://lottie.host/0005e4d5-4c5e-41de-9c19-25665f2ff932/EyMZWiucyY.lottie"
           loop
           autoplay
         />
        </div>

        <div className='site-btns'>
            <Button  onClick={gotoHome} variant="outlined" size="medium" className='btn' style={{marginBottom : '20px', color: 'green', borderColor: 'green'}}>
                Home
           </Button>
           
           <Button onClick={gotoHelp} variant="outlined" size="medium" className='btn' style={{marginBottom : '20px' ,color: 'green', borderColor: 'green'}}>
                Help
           </Button>
           
           <Button onClick={gotoPrivacy} variant="outlined" size="medium" className='btn' style={{marginBottom : '20px',color: 'green', borderColor: 'green'}}>
                Privacy Policy
           </Button>
        </div> 
     </div>
    )
}
export default SidePanel;
