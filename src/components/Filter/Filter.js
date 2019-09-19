import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Filter = () => {
    return(
        <div className="btn-group mb-3">
            <button className="btn btn-dark active">All</button>
            <button className="btn btn-dark">Actually</button>
            <button className="btn btn-dark">Done</button>
        </div>
    );
};

export default Filter;