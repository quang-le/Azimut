import React,{Component} from 'react';
//import {NavLink} from 'react-router-dom';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';
import { Button } from '@material-ui/core';

export default class Update extends Component{
    
    updatePath(e){
        e.preventDefault();
        let newName=e.target.newName.value;
        this.setState({'newName':newName}, ()=>{
            console.log(newName)
            this.updateAPI();
        })

    }


    updateAPI = async () => {
        const updater = await fetch('/updateroute',{
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                'user':this.props.user,
                'oldName':this.props.pathName,
                'newName': this.state.newName
            })
        });
        return this.props.displayRoute()
    }


    render(){
        console.log(this.props.user);
        return(
            <div>
                <form onSubmit={(e)=>this.updatePath(e)}>
                    <input name="newName" placeholder="choose new path name"></input>
                    <button type="submit" >Update Route</button>
                </form>
               
            </div>
        )
    }

    
}