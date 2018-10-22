import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
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
          <Button color="inherit"><Link to = "/">Home</Link></Button>
            <Typography variant="h2" color="inherit" >
              Azimut
            </Typography>
            <Button color="inherit"><Link to = "/logout">Log Out</Link></Button>
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
            <Button color="inherit"><Link to = "/">Home</Link></Button>
              <Typography variant="h2" color="inherit" >
                Azimut
              </Typography>
              <Button color="inherit"><Link to = "/signup">Sign Up</Link></Button>
              <Button color="inherit"><Link to = "/login">Log In</Link></Button>
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