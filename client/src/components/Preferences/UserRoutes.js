import React,{Component}from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import fb from '../Backend/FB-Config';
import firebase from 'firebase';

export default class UserRoutes extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:""
        }
    }
    componentDidMount(){ 
        let self=this
        // self.login();
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(firebase.auth().currentUser.email)//display user that just signed in
            self.setState({user:firebase.auth().currentUser.email});
          }
        }); 
        console.log(self.user);
    }
    render(){
        return(
            <div>
                <Grid>
                    <Typography>
                        Display user routes here
                    </Typography>
                </Grid>
            </div>
        )
    }
}