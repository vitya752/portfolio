import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExclamation, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class ItemList extends Component {

    render() {
        const { data, important, onToggleImportant, onItemDelete } = this.props;
        const importantItem = important ? 'active' : null;
        return(
            <li
                className={`list-group-item list-group-item--custom ${importantItem}`} >
                { data }
                <div className="float-right buttons-wrap">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onToggleImportant} >
                        <FontAwesomeIcon icon={faExclamation} />
                    </button>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={onToggleImportant} >
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </button>
                    <button 
                        className="btn btn-danger" 
                        type="button"
                        onClick={onItemDelete} >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </li>
        );
    }

    // onToggleImportant() {
    //     let { important } = this.state;
    //     let stateImportant = important ? false : true;
    //     this.setState({
    //         important: stateImportant
    //     });
    // }

}

export default ItemList;