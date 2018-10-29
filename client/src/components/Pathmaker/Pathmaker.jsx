import React, {Component} from 'react';


export default class Pathmaker extends Component{
    // displayCoordinates(){
    //     let dataJSON=JSON.parse(document.getElementById('coordinates').value);
        
    //     let coordinatesArray=dataJSON.coordinates.map((point,index)=>{
    //         return(
    //             <div className="single-coord" key={"point"+index}>
    //                 Coordonnées {index}: {point}
    //             </div>
    //         )
    //     })
    //     document.getElementById('coord-wrap').innerHTML=coordinatesArray;
        
    // }

    // shittyHackyTimer(){
    //     setTimeout(this.displayCoordinates,3000)
    // }
    

    render(){
            // console.log(this.props.coords.coordinates);
            
            let coordinatesArray=this.props.coords.coordinates.map((point,index)=>{
                return(
                    <div className="single-coord" key={"point"+index}>
                        <p>Coordonnées {index+1}:</p> 
                        <p>latitude:{point.lat} / longitude:{point.lng}</p>
                    </div>
                )
            })
        
        
        return (
            <div>    
                <div id="ui">
                    <section>
                        <h3>Vos coordonnées</h3>
                        <div id="coord-wrap">
                            {coordinatesArray}
                        </div>
                    </section>
                    <section><h3>Coordonnées au format JSON</h3>
                        <textarea id="coordinates"></textarea>
                        <button type="button" id="confirm">Confirmer la trajectoire</button>
                    </section>
                    
                </div>
            </div>
         
        )
    }
}

