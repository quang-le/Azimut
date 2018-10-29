import React,{Component} from 'react';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';
import {Link} from 'react-router-dom';

export default class Logout extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:"",
        }
    }


        componentWillMount(){
            firebase.auth().signOut().then(function() {
            
                console.log('logging out')
                
              }, function(error) {
                console.error('Sign Out Error', error);
              });
        }
       
      
    render(){
        return(
            <div>Log Out screen</div>
        )
    }
}