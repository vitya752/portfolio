import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const Filter = ({ filter, onFilterChange}) => {
    const buttons = filterButtons.map(({name, label}) => {
        const isActive = filter === name;
        const classes = 'btn btn-dark' + (isActive ? ' active' : '');
        return(
            <button 
                key={name}
                className={classes}
                onClick={() => onFilterChange(name)}>
                {label}
            </button>
        );
    });
    return(
        <div className="btn-group mb-3">
            {buttons}
        </div>
    );
};

export default Filter;