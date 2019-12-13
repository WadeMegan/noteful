import React, {Component} from 'react';
import './HomeSideBar.css'
import FolderItem from '../FolderItem/FolderItem'
import AddFolderButton from '../AddFolderButton/AddFolderButton'

class HomeSideBar extends Component {
    
    render(){
        return(
            <div className="sideBar homeSideBar">
                <ul>
                    {this.props.folders
                        .map((folder,index)=>{
                            return(
                                <FolderItem folder={folder} key={index}/>
                            )
                        })}
                </ul>
                <AddFolderButton/>
            </div>          
        )
    }
}

export default HomeSideBar