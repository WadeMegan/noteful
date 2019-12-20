import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import DeleteButton from '../DeleteButton/DeleteButton'
import ApiContext from '../../ApiContext'


class NotePageItem extends Component {
    static contextType = ApiContext;
    render(){

        function makeDate (modified){
            let d = new Date(modified)
            let day= d.toDateString()
            return(day)
        }
        
        let date = makeDate(this.context.currentNote.modified)
        
        return(<div>
            <h2>{this.context.currentNote.name}</h2>
            <p>Date modified on {date} </p>
            <DeleteButton/>
        </div>)
        
    }
}

export default NotePageItem