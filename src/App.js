
import './App.css';
import 'animate.css'; 

import Ledo from './Ledo/Ledo';
import HomePage from './HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

function App() {  
  return (
    <>
     
      <Router> 
        <Link to='/ledo448'>Le Do</Link> 
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
