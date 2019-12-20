import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import HomePage from './Composition/HomePage/HomePage'
//import STORE from './Composition/dummy-store'
import Header from './Composition/Header/Header'
import FolderPage from './Composition/FolderPage/FolderPage'
import NotePage from './Composition/NotePage/NotePage'
import './App.css'
import config from './config'
import ApiContext from './ApiContext';
import { tsImportEqualsDeclaration } from '@babel/types';

class App extends Component {

  state = {
    notes:[],
    folders:[],
    currentNote: null,
    currentFolder: null
  }

  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note=>
      note.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
  }

  setNote = (note) => {
    this.setState({
      currentNote: note
    }
    )
  }

  setFolder = (folder) => {
    this.setState({
      currentFolder: folder
    }
    )
  }

  fetchData = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
  ])
      .then(([notesRes, foldersRes]) => {
          if (!notesRes.ok)
              return notesRes.json().then(e => Promise.reject(e));
          if (!foldersRes.ok)
              return foldersRes.json().then(e => Promise.reject(e));

          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
          this.setState({notes, folders});
      })
      .catch(error => {
          console.error({error});
      });

  }

  componentDidMount() {
    this.fetchData()
}


  /*constructor(props){
    super(props)
    let folders = STORE.folders
    let notes = STORE.notes
    this.state={
      folders:folders,
      notes:notes
    }
  }*/

  render(){
    const value = {
      notes:this.state.notes,
      folders:this.state.folders,
      deleteNote:this.handleDeleteNote,
      currentNote:this.state.currentNote,
      currentFolder:this.state.currentFolder,
      setNote: this.setNote,
      setFolder: this.setFolder,
      fetchData: this.fetchData,
      deleteNote:this.deleteNote
    }
    
    return (
      <ApiContext.Provider value={value}>
        <main className='App'>
          <Header/>
          <Route 
            exact path='/'
            render={(props)=><HomePage/>}
          />
          <Route
            path='/folder/:folderId'
            render={(props)=><FolderPage props={props}/>}
          />
          <Route 
            path='/note/:noteId'
            render={(props)=><NotePage props={props}/>}
          />
        </main>
      </ApiContext.Provider>
    )
  }

}

export default App;