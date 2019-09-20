import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

const Navigation = ({onSearchChange, filter, onFilterChange}) => {
    return(
        <div className="navigation-panel d-flex">
            <Search 
                onSeachChange={onSearchChange} />
            <Filter 
                filter={filter}
                onFilterChange={onFilterChange} />
        </div>
    );
};

export default Navigation;