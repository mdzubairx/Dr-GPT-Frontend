import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Chatwindow from "./Chatwindow.jsx"
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Help from "./Help.jsx";
import Home from "./Home.jsx"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chatwindow />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
