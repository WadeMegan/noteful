import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import ApiContext from '../../ApiContext'

class Header extends Component {
    
    static contextType = ApiContext;

    render(){
        return(
            //empty div for styling purposes
            <header>
                <div></div> 
                <Link to='/' onClick={()=>{this.context.setFolder({})}}>
                    Noteful
                </Link>
            </header>
        )
    }
}

export default Header