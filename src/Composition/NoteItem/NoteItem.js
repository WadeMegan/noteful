import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import DeleteButton from '../DeleteButton/DeleteButton'

class NoteItem extends Component {
    

    
    render(){
        
        function makeDate (modified){
            let d = new Date(modified)
            let day= d.toDateString()
            return(day)
        }
        
        let date = makeDate(this.props.note.modified)
        
        return(<div>
            <Link to={`/note/${this.props.note.id}`}>{this.props.note.name}</Link>
            <p>Date modified on {date} </p>
            <DeleteButton/>
        </div>)
        
    }
}

export default NoteItem