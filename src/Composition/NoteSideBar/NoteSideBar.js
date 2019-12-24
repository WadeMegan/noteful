import React, {Component} from 'react';
import ApiContext from '../../ApiContext'
import './NoteSideBar.css'
import BackButton from '../BackButton/BackButton'

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

        console.log(folderName)

        return(<div className="sideBar noteSideBar">
            <BackButton/>
            <p>{folderName}</p>
        </div>          
        )
    }
}

export default NoteSideBar