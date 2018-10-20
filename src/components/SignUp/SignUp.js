import React,{Component} from 'react';
//import Auth from '../Backend/Auth';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';


export default class SignUp extends Component{
  componentDidMount(){
    const authy=firebase.auth();

    document.getElementById('register').addEventListener('click', function(){
      console.log('click');
      let email= document.getElementById('registermail').value;
      let password= document.getElementById('registerpwd').value;

      authy.createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
          } else {
          alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
      });
      console.log('all done')
    })
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
      </div>
    )
  }
}