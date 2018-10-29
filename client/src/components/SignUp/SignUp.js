import React,{Component} from 'react';
import firebase from 'firebase';
import fb from './Backend/FB-Config';
import {Link} from 'react-router-dom';
import createUser from './myAPI/createUser';
//import Auth from '../Backend/Auth';


export default class SignUp extends Component{
constructor(props) {
  super(props);
  this.state={
    user:"",
    username:"",
  }
  ;
}

  signUp(){
    const authy=firebase.auth();
    document.getElementById('register').addEventListener('click', function(){
      let email= document.getElementById('registermail').value;
      let password= document.getElementById('registerpwd').value;

      authy.createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode ==='auth/weak-password') {
          alert('The password is too weak.');
          } else {
          alert(errorMessage);
          }
          //console.log(error);
          // [END_EXCLUDE]
      });
      console.log('all done')
      //console.log(authy.currentUser.email)//display last signed in user. does not update on adding user
    })
  };

  componentWillUnmount(){
    let self=this;
    let unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      unsubscribe();
      if (user) {
        self.setState({user:firebase.auth().currentUser.email});
      }
    });
  }
  
  componentDidMount(){ 
    let self=this
    self.signUp();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(firebase.auth().currentUser.email)//display user that just signed in
        self.setState({user:firebase.auth().currentUser.email});
      }
    }); 
    console.log(self.user);
    this.getUsername();
    createUser("register","click",this.state);
}

  getUsername(){
    document.getElementById("registeruser").addEventListener("click", e => {
    this.setState({username:e.target.value})
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
        <div> Register new user</div>
      )
    }
  }
  render(){
    return(
      <div>
        <form>
          <label>User name</label>
          <input id="registeruser" placeholder="Choose a user name"></input>
          <label>Email</label>
          <input id = "registermail" type="email" placeholder="Enter your email"></input>
          <label>Password</label>
          <input id="registerpwd" type="password" placeholder="Choose a strong password"></input>
          <button type="button" id="register">Register</button>
        </form>
        {this.display()}
      </div>
    )
  }
}