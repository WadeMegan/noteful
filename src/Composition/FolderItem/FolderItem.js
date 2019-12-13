import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FoldersItem.css';

class FolderItem extends Component {
    
    render(){

        return(<li>
            <Link to={`/folder/${this.props.folder.id}`}>
                {this.props.folder.name}
            </Link>
        </li>)
        
    }
}

export default FolderItem