import React, { Component } from 'react';
import '../../App.css';
import '../footer/footer.css';
import Pathmaker from '../Pathmaker/Pathmaker';
import Map from '../Map/Map2';
import SavePath from '../myAPI/SavePath';
import DisplayRoutes from '../myAPI/DisplayRoutes';
import 'typeface-roboto';
import firebase from 'firebase';

class App extends Component {
constructor(props) {
  super(props);
  this.state={
    "coordinates":[],
    'response':'',
    'user':'',
    'username':'',
  }
}
  
  updateLine(e,line){
    let path= line.getPath();
    path.push(e.latLng);
    return path;
  }

  arrayCoords(line){
    let pathArray=line.getPath().getArray();
    let data=[];
    for (let i=0; i<pathArray.length;i++){
        let lat=pathArray[i].lat();
        let lng=pathArray[i].lng();
        let coords={lat:lat,lng:lng};
        data.push(coords);
    }
    console.log(data);
    return data
  }

  coordsToState(line){
    let data=this.arrayCoords(line);
    this.setState({coordinates:data});
    console.log(this.state.coordinates);
  }

 //legacy code to refactor
  convertJSON( line){
    let data= this.arrayCoords(line);
    let str_data=JSON.stringify(data);
    let json_data="{\"coordinates\":"+str_data+"}";
    return json_data;
  }
  displayJSON(line){
    let json_data=this.convertJSON(line);
    document.getElementById('coordinates').value=json_data;
    
    return json_data;
  }
  componentDidMount(){
    let self=this;
    
    firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       console.log(firebase.auth().currentUser.email)//display user that just signed in
       self.setState({user:firebase.auth().currentUser.email});
     }
   }); 
 }

  render() {
    
    return (
      <div className="App">
        {/* <Header/> */}
        <div>
          <div className="mapWrap">
            <Map
                id="myMap"
                options={{
                  center: { lat: 50.824692, lng: 4.372621 },
                  zoom: 17,
                }}
                onMapLoad={map => {
                  let line = new window.google.maps.Polyline({
                    map: map,
                    geodesic: true,
                    strokeOpacity: 1.0,
                    strokeWeight: 0.1,
                    editable:true, 
                  });
                  map.addListener('click', e => {
                    this.updateLine(e, line)
                  });
                //   document.getElementById('confirm').addEventListener('click', e => {
                //     this.displayJSON(line);
                //     this.coordsToState(line);
                //   })
                }}
            />
          </div>
          
         
          
        </div>
      </div>
    );
  }
}

export default App;
