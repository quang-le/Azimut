import React,{Component} from 'react';
//import {NavLink} from 'react-router-dom';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';
import { Button } from '@material-ui/core';

export default class Delete extends Component{

    deleteAPI = async () => {
        const deleter = await fetch('/deleteroute',{
            method:'delete',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                'pathName':this.props.pathName
            })
        });
        return this.props.displayRoute()
        
    }
    
    render(){
        return(
            <div>
                <Button onClick={this.deleteAPI}>Delete Route</Button>
            </div>
        )
    }

    
}