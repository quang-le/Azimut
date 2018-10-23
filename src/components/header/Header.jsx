import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';

export default class Header extends Component{
  constructor(props) {
    super(props);
    this.state={
      user:""
    } 
  }

  headerDisplay(){
    if (this.state.user){
      return (
        <div>
        <AppBar position="static">
          <Toolbar>
          <NavLink to = "/"><Button color="inherit">Home</Button></NavLink>
            <Typography variant="h2" color="inherit" >
              Azimut
            </Typography>
            <NavLink to = "/logout"><Button color="inherit">Log Out</Button></NavLink>
          </Toolbar>
        </AppBar>
      </div>
      )
    }
    else{
      return (
        <div >
          <AppBar position="static">
            <Toolbar>
            <NavLink to = "/"><Button color="inherit">Home</Button></NavLink>
              <Typography variant="h2" color="inherit" >
                Azimut
              </Typography>
              <NavLink to = "/signup"><Button variant="contained" color="inherit">Sign Up</Button></NavLink>
              <NavLink to = "/login"><Button color="inherit">Log In</Button></NavLink>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }

  componentDidMount(){
    let self=this;
    firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       console.log(firebase.auth().currentUser.email)//display user that just signed in
       self.setState({user:firebase.auth().currentUser.email});
     }
     else{
       self.setState({user:""})
     }
   }); 
   console.log(self.user);
 }

  render(){  
    return(
      <div>{this.headerDisplay()}</div>
    )
  } 
}