import React,{Component} from 'react';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';
import {Link} from 'react-router-dom';


export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:""
        }
    }

    login(){
        document.getElementById('loginbtn').addEventListener('click', function(){
            let email=document.getElementById('loginmail').value,
            password= document.getElementById('loginpwd').value;
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
                } else {
                  alert(errorMessage);
                }
                // console.log(error);
                // document.getElementById('quickstart-sign-in').disabled = false;
                // [END_EXCLUDE]
              }); 
              console.log('login successful');
        })
    }

    display(){
        if (this.state.user){
          return (
            <button><Link to="/profile">Go to profile, {this.state.user}</Link></button>
          )
        }
        else {
          return (
            <div> Please Log in</div>
          )
        }
      }
    componentDidMount(){
       let self=this;
       self.login();
       firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(firebase.auth().currentUser.email)//display user that just signed in
          self.setState({user:firebase.auth().currentUser.email});
        }
      }); 
      console.log(self.user);
    }
    render(){
        return (
            <div>
            <form>
                <label>Email</label>
                <input id = "loginmail" type="email" placeholder="Enter your email"></input>
                <label>Password</label>
                <input id="loginpwd" type="password" placeholder="Enter password"></input>
                <button type="button" id="loginbtn">Log In</button>
            </form>
            {this.display()}
            </div>
           
            
        )
    }
    
}