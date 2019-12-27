import React, {Component} from 'react';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import NoteMain from '../NoteMain/NoteMain'
import ApiContext from '../../ApiContext'

class NotePage extends Component {
    static contextType = ApiContext;
    
    //for refreshing
    componentDidMount(){
        if(!this.context.notes.length || !this.context.folders.length || !this.context.currentNote){
            this.context.fetchData()
        }
    }

    componentWillUpdate(nextprops){
       

        if(!this.context.currentNote){
                   const {props: {match}} = nextprops
        const note = this.context.notes.find(n =>
            n.id == match.params.noteId)
            
        this.context.setNote(note)
        console.log(this.context.currentNote)
        }
 
    }


    /*componentWillMount(){
  const {props: {match}} = this.props
        const note = this.context.notes.find(n =>
            n.id === match.params.noteId)
        console.log(note)
        console.log(this.context)
            this.context.setNote(note)
        console.log(this.context.currentNote)
    }*/
    render(){
        //is this the right place for this
        /*const {props: {match}} = this.props
        const note = this.context.notes.find(n =>
            n.id === match.params.noteId)
        console.log(note)
        console.log(this.context)
            //this.context.setNote(note)*/
        
console.log(this.context)
        //for refreshing - wont return error on refresh
        if(!this.context.notes.length || !this.context.folders.length || !this.context.currentNote){
            return null
        }
        console.log("hello")
        
        
        return(<div className="contentContainer">
           <NoteSideBar/>
            <NoteMain/> 
        </div>
        )
    }
}

export default NotePage
