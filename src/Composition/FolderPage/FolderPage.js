import React, {Component} from 'react';
import HomeSideBar from '../HomeSideBar/HomeSideBar'
import FolderMain from '../FolderMain/FolderMain'


class FolderPage extends Component {
    
    render(){
        const folder = this.props.state.folders.find(f =>
            f.id === this.props.match.params.folderId)

        return(<div className="contentContainer">
            <HomeSideBar folders={this.props.state.folders}/>
            <FolderMain notes={this.props.state.notes} folderId={this.props.match.params.folderId}/>
        </div>
        )
    }
}

export default FolderPage