import ChatSection from "./ChatSection";
import SidePanel from "./SidePanel";
import './Chatwindow.css';

function Chatwindow(){
    return(
        <div className="Chatwindow">
        <SidePanel/>
        <ChatSection/>
        </div>
    )
}

export default Chatwindow; 
