import React, {Component} from 'react';
import './HomeSideBar.css'
import FolderItem from '../FolderItem/FolderItem'
import AddFolderButton from '../AddFolderButton/AddFolderButton'
import ApiContext from '../../ApiContext'

class HomeSideBar extends Component {
    static contextType = ApiContext;
    render(){
        console.log(this.context)
        return(
            <div className="sideBar homeSideBar">
                <ul>
                    {this.context.folders
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