import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import HomePage from './Composition/HomePage/HomePage'
import STORE from './Composition/dummy-store'
import Header from './Composition/Header/Header'
import FolderPage from './Composition/FolderPage/FolderPage'
import NotePage from './Composition/NotePage/NotePage'
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    let folders = STORE.folders
    let notes = STORE.notes
    this.state={
      folders:folders,
      notes:notes
    }
  }

  render(){
    console.log(this.state)
    return (
      <main className='App'>
        <Header/>
        <Route 
          exact path='/'
          render={(props)=><HomePage {...props} state={this.state}/>}
        />
        <Route
          path='/folder/:folderId'
          render={(props)=><FolderPage {...props} state={this.state}/>}
        />
        <Route 
          path='/note/:noteId'
          render={(props)=><NotePage {...props} state={this.state}/>}
        />
      </main>
    )
  }

}

export default App;