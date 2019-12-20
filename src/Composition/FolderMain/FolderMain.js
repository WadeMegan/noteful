import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import ApiContext from '../../ApiContext'

class FolderMain extends Component {
    static contextType = ApiContext;
    render(){
        return(<div>
            {this.context.notes
                .map((note,index)=>{
                    if (this.context.currentFolder.id===note.folderId){
                        return(<NoteItem note={note} key={index}/>)
                    }
                })
            }
            <AddNoteButton/>
        </div>
        )
    }
}

export default FolderMain