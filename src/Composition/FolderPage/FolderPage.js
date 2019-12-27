import React, {Component} from 'react';
import HomeSideBar from '../HomeSideBar/HomeSideBar'
import FolderMain from '../FolderMain/FolderMain'
import ApiContext from '../../ApiContext'

class FolderPage extends Component {
    static contextType = ApiContext;
        //for refreshing
        componentDidMount(){
            if(!this.context.notes.length || !this.context.folders.length || !this.context.currentFolder){
                this.context.fetchData()
            }
        }
    
        componentWillUpdate(nextprops){
           
    console.log(this.context)
            if(!this.context.currentFolder){
                       
                const {props: {match}} = nextprops
            const folder = this.context.folders.find(f =>
                f.id == match.params.folderId)
            
                console.log(folder)

            this.context.setFolder(folder)
            console.log(this.context.currentFolder)
            }
     
        }
    

    render(){
        if(!this.context.folders.length || !this.context.notes.length || !this.context.currentFolder){
            return null
        }
        console.log("hello")
        
        /*const {props: {match}} = this.props
        const folder = this.context.folders.find(f =>
            f.id === match.params.folderId)*/

        return(<div className="contentContainer folderPage">
            <HomeSideBar/>
            <FolderMain/>
        </div>
        )
    }
}

export default FolderPage