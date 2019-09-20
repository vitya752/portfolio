import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExclamation, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({ data, important, done, onToggleImportant, onToggleDone, onItemDelete }) => {

    const importantItem = important ? 'active' : null;
    const doneItem = done ? 'doneItem' : null;
    const buttons = [
        { classNames: "btn btn-primary", onClickFunction: onToggleImportant, fontAwesomeIcon: faExclamation },
        { classNames: "btn btn-success btn-done", onClickFunction: onToggleDone, fontAwesomeIcon: faCheckSquare },
        { classNames: "btn btn-danger", onClickFunction: onItemDelete, fontAwesomeIcon: faTrash }
    ]
    
    const renderButtons = buttons.map((item) => {
        return(
            <button
                type="button"
                className={item.classNames}
                onClick={item.onClickFunction} >
                <FontAwesomeIcon icon={item.fontAwesomeIcon} />
            </button>
        );
    });

    return(
        <li
            className={`list-group-item list-group-item--custom ${importantItem} ${doneItem}`} >
            { data }
            <div className="float-right buttons-wrap">
                {renderButtons}
            </div>
        </li>
    );
}

export default ItemList;