import logo from './logo.png';
import './App.css';
import 'animate.css'; 
import WOW from 'wowjs';
import { useEffect } from 'react';
import { AiFillSkype } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function App() { 
  useEffect(()=>{
    new WOW.WOW({
      live: false
    }).init();
  })
  return (
    <div className="App"> 
      <header className="App-header">
        <div className="wow animate__backInRight animation" data-wow-duration="2s"><img src={logo} className="App-logo" alt="logo" /></div>
        <ul style={{textAlight:'center'}}>
          <li><a href='https://facebook.com/cusenbonchen' target={'_blank'} rel="noopener noreferrer"><AiFillFacebook/></a></li>
          <li><a href='https://join.skype.com/invite/bIEMDrutWpit' target={'_blank'} rel="noopener noreferrer"><AiFillSkype/></a></li> 
          <li><a href='mailto:cusenbonchen@gmail.com' target={'_blank'} rel="noopener noreferrer"><AiOutlineMail/></a></li> 
        </ul>
        <p>
          Nguyễn Thành Tuân
        </p> 

      </header>
    </div>
  );
}

export default App;
