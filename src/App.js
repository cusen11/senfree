import logo from './logo.png';
import './App.css';
import 'animate.css'; 
import WOW from 'wowjs';
import { useEffect } from 'react';
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
        <p>
          Nguyễn Thành Tuân
        </p> 
      </header>
    </div>
  );
}

export default App;
