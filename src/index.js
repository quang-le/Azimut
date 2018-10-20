import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Preferences from './components/Preferences/Preferences';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Header}/>
            <Route exact path= "/" component ={App}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/profile" component ={Preferences}/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
