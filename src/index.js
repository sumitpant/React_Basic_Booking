import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import { 
  BrowserRouter as Router,Route
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Booking from './book';

ReactDOM.render(
  <React.StrictMode>
    
 <Router>
   <div>
     <Route exact path="/" component={App}/>
     <Route path="/home/:name" component={Home}/>
     <Route path="/book/:moviename" component={Booking}/>
   </div>
 </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
