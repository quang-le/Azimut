import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fb from '../Backend/FB-Config';
import firebase from 'firebase';

export default class Preferences extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:""
        }
    }
    
    componentDidMount(){ 
        let self=this
        // self.login();
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(firebase.auth().currentUser.email)//display user that just signed in
            self.setState({user:firebase.auth().currentUser.email});
          }
        }); 
        console.log(self.state.user);
        
    }
    
    render(){
        return(
            <div>
                <div>Welcome {this.state.user}</div>
                <div>
                    Map center
                </div>
                <div>
                    Zoom
                </div>
                <div>
                    User name
                </div>
                <div>Saved Coordinates</div>

            </div>
        )
    }
}