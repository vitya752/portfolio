import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

const Navigation = () => {
    return(
        <div className="navigation-panel d-flex">
            <Search />
            <Filter />
        </div>
    );
};

export default Navigation;