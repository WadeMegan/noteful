import React, {Component} from 'react';
import ApiContext from '../../ApiContext'

class NoteSideBar extends Component {
    static contextType = ApiContext;
    render(){

        /*const {props: {match}} = this.props
        const note = this.context.notes.find(n =>
            n.id == match.params.noteId)*/

        let folder = this.context.folders.find((item)=>{
            return item.id===this.context.currentNote.folderId
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