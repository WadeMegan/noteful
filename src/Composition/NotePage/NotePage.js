import React, {Component} from 'react';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import NoteMain from '../NoteMain/NoteMain'
import './NotePage.css'

class NotePage extends Component {
    
    render(){
        const note = this.props.state.notes.find(n =>
            n.id === this.props.match.params.noteId)
        return(<div className="contentContainer">
            <NoteSideBar folders={this.props.state.folders} note={note}/>
            <NoteMain note={note}/>
        </div>
        )
    }
}

export default NotePage