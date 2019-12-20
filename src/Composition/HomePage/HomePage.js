import React, {Component} from 'react';
import './HomePage.css'
import HomeSideBar from '../HomeSideBar/HomeSideBar';
import HomeMain from '../HomeMain/HomeMain'

class HomePage extends Component {
    
    render(){
        return(<div className="contentContainer">
                <HomeSideBar/>
                <HomeMain/>
            </div>
        )
    }
}

export default HomePage