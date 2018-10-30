import React,{Component} from 'react';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';

export default class DisplayRoutes extends Component{

    // displayRoutes(e){
    //     //e.preventDefault();
    //     this.displayRoutes();
    // }

    displayRoutesAPI = async () => {
        const response = await fetch('/displayroutes',{
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({  
            'user':this.props.user,
            'field': 'path', 
          })
        });
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        return body;
      };

    render(){
        return(
            <div>
                <button type="button" onClick={this.displayRoutesAPI}>See all my routes</button>
            </div>
        )
    }
}