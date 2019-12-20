import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import ApiContext from '../../ApiContext'
import NotePageItem from '../NotePageItem/NotePageItem'

class NoteMain extends Component {
    static contextType = ApiContext;
    
    render(){

        /*const {props: {match}} = this.props
        const note = this.context.notes.find(n =>
            n.id === match.params.noteId)*/

        return(<div className="main">
            <NotePageItem/>
            <p>{this.context.currentNote.content}</p>
        </div>
        )
    }
}

export default NoteMain