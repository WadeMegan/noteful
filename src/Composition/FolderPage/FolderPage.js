import React, {Component} from 'react';
import HomeSideBar from '../HomeSideBar/HomeSideBar'
import FolderMain from '../FolderMain/FolderMain'


class FolderPage extends Component {
    
    render(){

        
        /*const {props: {match}} = this.props
        const folder = this.context.folders.find(f =>
            f.id === match.params.folderId)*/

        return(<div className="contentContainer folderPage">
            <HomeSideBar/>
            <FolderMain/>
        </div>
        )
    }
}

export default FolderPage