import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import DeleteButton from '../DeleteButton/DeleteButton'
import ApiContext from '../../ApiContext'


class NoteItem extends Component {
    static contextType = ApiContext;
    render(){
        function makeDate (modified){
            let d = new Date(modified)
            let day= d.toDateString()
            return(day)
        }
        
        let date = makeDate(this.props.note.modified)
        
        return(<div>
            <Link to={`/note/${this.props.note.id}`} onClick={()=>{this.context.setNote(this.props.note)}}>{this.props.note.name}</Link>
            <p>Date modified on {date} </p>
            <DeleteButton noteId = {this.props.note.id}/>
        </div>)
        
    }
}

export default NoteItem