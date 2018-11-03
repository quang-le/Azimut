import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase';
import fb from '../Backend/FB-Config';
import Delete from './Delete';
import Update from './Update';

export default class DisplayRoutes extends Component{
    constructor(props) {
        super(props);
        this.state={
            reqSent:false,
            paths:[]
        }
    }
    
    extractPathFromJSON(file){
        let pathArray=file.map((path)=>{
            return path
        })
        return pathArray;
    }
    displayRoutesAPI = async () => {
        const response = await fetch('/displayroutes',{
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            'user':this.props.user,
          })
        });
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        console.log(this.state.paths)
        let toState=this.extractPathFromJSON(body);
        this.setState({reqSent:true,paths:toState}, ()=>{console.log(this.state.paths)});
        return body;
      };

    render(){    
        let coordsToDisplay=this.state.paths.map((path)=>{
            let coordsArray=path.path.coordinates.map((coord)=>{
                return([coord.lat, coord.lng]);
            })
            
            return ({name:path.path.name, coords:coordsArray})   
        })
        ////////////
        let pathsToDisplay=coordsToDisplay.map((path,index)=>{
            let pathCoords=path.coords.map((coord, index)=>{
                return (
                    <p key={"coordID"+index}>lat:{coord[0]}, lng:{coord[1]}</p>
                )
            })
            return(
                <div key={"pathID"+index}>
                    <p>{path.name}</p>
                    <section>{pathCoords}</section>
                    <Update user={this.props.user} displayRoute={this.displayRoutesAPI.bind(this)} pathName={path.name}/>
                    <Delete pathName={path.name} displayRoute={this.displayRoutesAPI.bind(this)}/>
                </div>
            )
        })

        if (!this.state.reqSent){
        return(
            <div>
                <button type="button" onClick={this.displayRoutesAPI}>See all my routes</button>
            </div>
        )}

        else{
            return(
                <div>
                    {pathsToDisplay}
                </div>
            )
        }
    }
}


//Solution plus élégante et lisible pour mapper dans un sous-objet
// return(
//     <div>
//         {/* {pathsToDisplay} */}
//         {array.map((obj)=>{
//             return(
//                 <div>
//                     TOUT LES obj
//                     {obj.sousobj.map((sousobj)=>{
//                         return(
//                             <ul>
//                                 <li>{sousobj.name}</li>
//                             </ul>
//                         )
//                     })}
//                 </div>
//             )
//         })}
//     </div>
// )