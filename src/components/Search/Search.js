import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({ onSeachChange }) => {
    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Search</span>
            </div>
            <input 
                type="text" 
                className="form-control"
                onChange={onSeachChange} />
        </div>
    );
};

export default Search;