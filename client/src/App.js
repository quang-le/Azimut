import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Preferences from './components/Preferences/Preferences';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import Logout from './components/Logout/Logout';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React,{Component}from 'react';


export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={Header}/>
                    <Route exact path= "/" component ={Main}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/profile" component ={Preferences}/>
                    <Route path="/" component={Footer}/>
                    
                </div>
            </Router>
        )
    }
}