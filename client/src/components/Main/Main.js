import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
//import Header from './components/header/Header';
//import Footer from '../footer/Footer';
import '../footer/footer.css';
import Pathmaker from '../Pathmaker/Pathmaker';
import Map from '../Map/Map2';
import 'typeface-roboto';
import SignUp from '../SignUp/SignUp';



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

  //test code for API--> working
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
                  document.getElementById('confirm').addEventListener('click', e => {
                    this.displayJSON(line);
                    this.coordsToState(line);
                  })
                }}
            />
          </div>
          <Pathmaker coords={this.state}/>
        </div>
        {/* <Footer/> */}
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
