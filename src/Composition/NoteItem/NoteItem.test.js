import React from 'react'
import ReactDOM from 'react-dom'
import NoteItem from './NoteItem'


it('renders without crashing',()=>{
    
    let note = {
        modified: "2018-08-15T23:00:00.000Z",
        id:"1",
        name:"Hello"
    }
    
    const div = document.createElement('div')
    ReactDOM.render(<NoteItem note={note}/>,div)
    ReactDOM.unmountComponentAtNode(div)
})