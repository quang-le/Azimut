import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Preferences extends Component{
    render(){
        return(
            <div>
                <div>
                    Map center
                </div>
                <div>
                    Zoom
                </div>
                <div>
                    User name
                </div>

            </div>
        )
    }
}