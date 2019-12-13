import React, {Component} from 'react';

class NoteSideBar extends Component {
    
    render(){

        let folder = this.props.folders.find((item)=>{
            return item.id==this.props.note.folderId
        }) 

        let folderName = folder.name

        return(<div className="sideBar">
            <button>Go back</button>
            {folderName}
        </div>          
        )
    }
}

export default NoteSideBar