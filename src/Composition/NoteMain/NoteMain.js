import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import ApiContext from '../../ApiContext'
import NotePageItem from '../NotePageItem/NotePageItem'
import './NoteMain.css'

class NoteMain extends Component {
    static contextType = ApiContext;
    
    render(){

        /*const {props: {match}} = this.props
        const note = this.context.notes.find(n =>
            n.id === match.params.noteId)*/

        console.log(this.context)
        return(<div className="main">
            <NotePageItem/>
            <p className="content">{this.context.currentNote.content}</p>
        </div>
        )
    }
}

export default NoteMain