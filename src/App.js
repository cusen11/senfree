
import './App.css';
import 'animate.css'; 

import Ledo from './Ledo/Ledo';
import HomePage from './HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {  
  return (
    <>
     
      <Router>  
        <Switch>
          <Route path='/ledo448'>
            <Ledo />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route> 
        </Switch> 
    </Router>
    </>
  );
}

export default App;
