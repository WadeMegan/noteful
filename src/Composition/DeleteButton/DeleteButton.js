import React, {Component} from 'react';
import ApiContext from '../../ApiContext'
import config from '../../config'

class DeleteButton extends Component {
    static contextType = ApiContext;
    

    
    render(){

        console.log(this.props.noteId)
        function deleteNoteRequest(noteId, callback){
            fetch(`${config.API_ENDPOINT}/notes/${noteId}`,{
                method: 'DELETE',
                headers: {
                    'content-type':'application/json'
                },
            })
            .then(res=>{
                if(!res.ok){
                    return res.json().then(error=>{
                        throw error
                    })
                }
                return res.json()
            })
            .then(data=>{
                callback(noteId)
            })
            .catch(error=>{
                console.error(error)
            })
        }

        return(
            <ApiContext.Consumer>
                {(context)=>(
                    <button onClick={()=>{deleteNoteRequest(this.props.noteId, context.deleteNote)}}>Delete Note</button>
                )}
            </ApiContext.Consumer>
        )
    }
}

export default DeleteButton