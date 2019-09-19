import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from '../ItemList/ItemList';
import './List.css';

const List = ({ data, onToggleImportant, onToggleDone, onItemDelete }) => {

    const dataList = data.map((item) => {
        return <ItemList 
                    key={item.id} 
                    data={item.text}
                    important={item.important}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleDone={() => onToggleDone(item.id)}
                    onItemDelete={() => onItemDelete(item.id)} />;
    });

    const renderList = dataList ? dataList : <p>Нету дел</p>;

    return(
        <div className="jumbotron jumbotron--custom mb-3">
            <ul className="list-group">
                { renderList }
            </ul>
        </div>
    );
};

export default List;