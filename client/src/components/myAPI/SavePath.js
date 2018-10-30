import React, {Component} from 'react';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';

export default class SavePath extends Component{

    SavePath(e){
        e.preventDefault();
        let route_name=e.target.route_name.value;
        let route_path=this.props.path;;
        let user=this.props.user;
        this.setState({'user':user, 'pathname':route_name, 'coordinates':route_path}, ()=>{
            console.log(this.state);
            this.savePathAPI();
            
        })
    }

    savePathAPI = async () => {
        const response = await fetch('/addroute',{
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({  
            'user':this.state.user,
            'pathname': this.state.pathname,
            'coordinates':this.state.coordinates  
          })
        });
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        return body;
      };
    
    render(){
        return (
            <div>
                <form onSubmit={(e)=>this.SavePath(e)}>
                    <label> Name  </label>
                    <input name="route_name" placeholder="Choose a name"></input>
                    <button type="submit">Save this route </button>
                </form>
            </div>
        )
    }
}