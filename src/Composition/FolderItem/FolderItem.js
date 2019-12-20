import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FoldersItem.css';
import ApiContext from '../../ApiContext'

class FolderItem extends Component {
    static contextType = ApiContext;
    render(){

        return(<li>
            <Link to={`/folder/${this.props.folder.id}`} onClick={()=>{this.context.setFolder(this.props.folder)}}>
                {this.props.folder.name}
            </Link>
        </li>)
        
    }
}

export default FolderItem