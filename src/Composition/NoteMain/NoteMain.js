import React, {Component} from 'react';
import NoteItem from '../NoteItem/NoteItem'

class HomeMain extends Component {
    
    render(){

        return(<div className="main">
            <NoteItem note={this.props.note}/>
            <p>{this.props.note.content}</p>
        </div>
        )
    }
}

export default HomeMain