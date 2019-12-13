import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import AddNoteButton from '../AddNoteButton/AddNoteButton';

class FolderMain extends Component {
    //{this.props.folderId}
    render(){
        return(<div>
            {this.props.notes
                .map((note,index)=>{
                    if (this.props.folderId===note.folderId){
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