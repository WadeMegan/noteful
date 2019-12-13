import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import './HomeMain.css'

class HomeMain extends Component {
    
    render(){

        return(<div className="main">
            {this.props.notes
                .map((note,index)=>{
                    return(<NoteItem note={note} key={index}/>)
                })}
            <AddNoteButton/>
        </div>
        )
    }
}

export default HomeMain