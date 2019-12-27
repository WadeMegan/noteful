import React, {Component} from 'react';
import './BackButton.css'
import ApiContext from '../../ApiContext'
import {Route, Link} from 'react-router-dom';

class BackButton extends Component {
    static contextType = ApiContext;

    
    /*constructor(props){
        super(props)
        this.goBack=this.goBack.bind(this)
    }*/

    /*function goBack(){
        console.log(this.context)
        //this.context.history.goBack()
    }*/

    
    render(){

        return(
            <ApiContext.Consumer>
                
                {(context)=>(
                <Link to="/" className="backButton">Go back</Link> 
                )}
            </ApiContext.Consumer>
        )
    }
}

export default BackButton