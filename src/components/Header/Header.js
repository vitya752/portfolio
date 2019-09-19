import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = ({ text }) => {
    return (
        <h1 className="text-center">{text}</h1>
    );
};

export default Header;