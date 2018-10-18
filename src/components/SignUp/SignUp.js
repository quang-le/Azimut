import React,{Component} from 'react';

export default class SignUp extends Component{

  render(){

    return(
      <div>
        <form>
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