import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExclamation, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({ data, important, done, onToggleImportant, onToggleDone, onItemDelete }) => {

    const importantItem = important ? 'active' : null;
    const doneItem = done ? 'doneItem' : null;

    return(
        <li
            className={`list-group-item list-group-item--custom ${importantItem} ${doneItem}`} >
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
                    className="btn btn-success btn-done"
                    onClick={onToggleDone} >
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

export default ItemList;